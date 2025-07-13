// GN Extract - Content Script
console.log('GN Extract: Content script carregado');

// Função para extrair números de telefone
function extractPhoneNumbers() {
  const phoneNumbers = [];
  
  // Seletores para encontrar os resultados no Google Maps
  const resultSelectors = [
    '[data-result-index]',
    '[role="article"]',
    '.hfpxzc',
    '.VkpGBb'
  ];
  
  // Buscar elementos que contenham informações de empresas
  const businessElements = document.querySelectorAll(resultSelectors.join(', '));
  
  businessElements.forEach((element, index) => {
    try {
      // Extrair nome da empresa
      const nameElement = element.querySelector('.qBF1Pd, .fontHeadlineSmall, .NrDZNb');
      const businessName = nameElement ? nameElement.textContent.trim() : `Empresa ${index + 1}`;
      
      // Procurar números de telefone no texto
      const phoneRegex = /(\(?\d{2}\)?\s?\d{4,5}-?\d{4}|\(?\d{2}\)?\s?\d{8,9})/g;
      const textContent = element.textContent;
      const phoneMatches = textContent.match(phoneRegex);
      
      if (phoneMatches) {
        phoneMatches.forEach(phone => {
          const cleanPhone = phone.replace(/\s+/g, ' ').trim();
          if (cleanPhone.length >= 8) {
            phoneNumbers.push({
              business: businessName,
              phone: cleanPhone,
              element: element
            });
          }
        });
      }
      
      // Procurar por elementos específicos que podem conter telefones
      const phoneElements = element.querySelectorAll('[data-phone], .rogA2c');
      phoneElements.forEach(phoneEl => {
        const phoneText = phoneEl.textContent.trim();
        if (phoneText.match(phoneRegex)) {
          phoneNumbers.push({
            business: businessName,
            phone: phoneText,
            element: element
          });
        }
      });
      
    } catch (error) {
      console.log('Erro ao processar elemento:', error);
    }
  });
  
  return phoneNumbers;
}

// Função para destacar elementos com telefones encontrados
function highlightPhoneElements(phoneData) {
  phoneData.forEach(item => {
    if (item.element) {
      item.element.style.border = '2px solid #4285f4';
      item.element.style.backgroundColor = '#e8f0fe';
    }
  });
}

// Função para remover highlights
function removeHighlights() {
  const highlightedElements = document.querySelectorAll('[style*="border: 2px solid #4285f4"]');
  highlightedElements.forEach(el => {
    el.style.border = '';
    el.style.backgroundColor = '';
  });
}

// Listener para mensagens do popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'extractPhones') {
    console.log('GN Extract: Iniciando extração de telefones');
    
    const phoneNumbers = extractPhoneNumbers();
    
    console.log('GN Extract: Telefones encontrados:', phoneNumbers.length);
    
    if (phoneNumbers.length > 0) {
      highlightPhoneElements(phoneNumbers);
      setTimeout(() => removeHighlights(), 5000); // Remove highlights após 5 segundos
    }
    
    sendResponse({
      success: true,
      data: phoneNumbers,
      count: phoneNumbers.length
    });
  }
  
  if (request.action === 'removeHighlights') {
    removeHighlights();
    sendResponse({ success: true });
  }
  
  return true; // Mantém o canal aberto para resposta assíncrona
});

// Observar mudanças na página para detectar novos resultados
const observer = new MutationObserver((mutations) => {
  // Pode ser usado para detectar quando novos resultados são carregados
  console.log('GN Extract: Página modificada, novos resultados podem estar disponíveis');
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Notificar que o script está pronto
chrome.runtime.sendMessage({ action: 'contentScriptReady' });