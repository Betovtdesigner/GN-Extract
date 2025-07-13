// GN Extract - Background Script (Service Worker)
console.log('GN Extract: Background script carregado');

// Listener para quando a extensão é instalada
chrome.runtime.onInstalled.addListener(() => {
  console.log('GN Extract: Extensão instalada com sucesso');
  
  // Criar menu de contexto (opcional)
  chrome.contextMenus.create({
    id: 'extractPhones',
    title: 'Extrair telefones desta página',
    contexts: ['page'],
    documentUrlPatterns: ['https://www.google.com/maps/*']
  });
});

// Listener para cliques no menu de contexto
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'extractPhones') {
    // Enviar mensagem para o content script
    chrome.tabs.sendMessage(tab.id, { action: 'extractPhones' });
  }
});

// Listener para mensagens dos content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'contentScriptReady') {
    console.log('GN Extract: Content script pronto na aba', sender.tab.id);
  }
  
  // Manter o canal aberto para resposta assíncrona
  return true;
});

// Listener para mudanças de aba
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes('google.com/maps')) {
    console.log('GN Extract: Google Maps carregado na aba', tabId);
  }
});

// Listener para cliques no ícone da extensão
chrome.action.onClicked.addListener((tab) => {
  // O popup será aberto automaticamente, mas podemos adicionar lógica aqui se necessário
  console.log('GN Extract: Ícone clicado na aba', tab.id);
});

// Função para verificar se a página atual é o Google Maps
function isGoogleMaps(url) {
  return url && url.includes('google.com/maps');
}

// Atualizar o badge do ícone quando houver resultados
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateBadge') {
    chrome.action.setBadgeText({
      text: request.count > 0 ? request.count.toString() : '',
      tabId: sender.tab.id
    });
    
    chrome.action.setBadgeBackgroundColor({
      color: request.count > 0 ? '#4285f4' : '#999',
      tabId: sender.tab.id
    });
  }
});