// GN Extract - Popup Script
console.log('GN Extract: Popup carregado');

let extractedData = [];

// Elementos do DOM
const extractBtn = document.getElementById('extractBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const status = document.getElementById('status');
const resultsSection = document.getElementById('resultsSection');
const resultsContent = document.getElementById('resultsContent');
const phoneCount = document.getElementById('phoneCount');

// Função para atualizar o status
function updateStatus(message, type = 'info') {
  status.textContent = message;
  status.className = `status ${type}`;
}

// Função para extrair telefones
async function extractPhones() {
  try {
    updateStatus('🔄 Extraindo telefones...', 'loading');
    extractBtn.disabled = true;
    
    // Verificar se estamos no Google Maps
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!tab.url.includes('google.com/maps')) {
      updateStatus('❌ Abra o Google Maps primeiro!', 'error');
      extractBtn.disabled = false;
      return;
    }
    
    // Enviar mensagem para o content script
    const response = await chrome.tabs.sendMessage(tab.id, { action: 'extractPhones' });
    
    if (response && response.success) {
      extractedData = response.data;
      
      if (extractedData.length > 0) {
        updateStatus(`✅ ${extractedData.length} telefone(s) encontrado(s)`, 'success');
        displayResults();
      } else {
        updateStatus('⚠️ Nenhum telefone encontrado', 'warning');
        resultsSection.style.display = 'none';
      }
    } else {
      updateStatus('❌ Erro ao extrair telefones', 'error');
    }
    
  } catch (error) {
    console.error('Erro na extração:', error);
    updateStatus('❌ Erro de conexão', 'error');
  } finally {
    extractBtn.disabled = false;
  }
}

// Função para exibir os resultados
function displayResults() {
  resultsSection.style.display = 'block';
  phoneCount.textContent = extractedData.length;
  
  const resultsHTML = extractedData.map((item, index) => {
    return `
      <div class="result-item">
        <div class="business-name">${index + 1}. ${item.business}</div>
        <div class="phone-number">📞 ${item.phone}</div>
      </div>
    `;
  }).join('');
  
  resultsContent.innerHTML = resultsHTML;
}

// Função para copiar para clipboard
async function copyToClipboard() {
  try {
    const textToCopy = extractedData.map((item, index) => {
      return `${index + 1}. ${item.business} - ${item.phone}`;
    }).join('\n');
    
    await navigator.clipboard.writeText(textToCopy);
    updateStatus('✅ Copiado para clipboard!', 'success');
    
    // Voltar ao status anterior após 2 segundos
    setTimeout(() => {
      updateStatus(`✅ ${extractedData.length} telefone(s) encontrado(s)`, 'success');
    }, 2000);
    
  } catch (error) {
    console.error('Erro ao copiar:', error);
    updateStatus('❌ Erro ao copiar', 'error');
  }
}

// Função para baixar arquivo .txt
function downloadTxtFile() {
  try {
    const textContent = extractedData.map((item, index) => {
      return `${index + 1}. ${item.business} - ${item.phone}`;
    }).join('\n');
    
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `telefones_google_maps_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
    
    updateStatus('✅ Arquivo baixado!', 'success');
    
    // Voltar ao status anterior após 2 segundos
    setTimeout(() => {
      updateStatus(`✅ ${extractedData.length} telefone(s) encontrado(s)`, 'success');
    }, 2000);
    
  } catch (error) {
    console.error('Erro ao baixar:', error);
    updateStatus('❌ Erro ao baixar arquivo', 'error');
  }
}

// Event listeners
extractBtn.addEventListener('click', extractPhones);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadTxtFile);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  updateStatus('Pronto para extrair telefones');
});

// Listener para mensagens do background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'contentScriptReady') {
    console.log('GN Extract: Content script pronto');
  }
});