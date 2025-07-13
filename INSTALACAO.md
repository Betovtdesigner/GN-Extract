# 🛠️ Instruções de Instalação - GN Extract

## 📋 Pré-requisitos

- Navegador Chrome ou Edge
- Todos os arquivos do plug-in na mesma pasta

## 🎨 Ícones necessários

O plug-in precisa de 3 ícones no formato PNG:

### Criar ícones:

1. **icon16.png** (16x16 pixels) - Barra de ferramentas
2. **icon48.png** (48x48 pixels) - Página de extensões
3. **icon128.png** (128x128 pixels) - Chrome Web Store

### Opções para criar ícones:

**Opção 1: Ícone simples (emoji)**
- Use o emoji 🧠 em um editor como Canva ou Figma
- Salve nos tamanhos especificados

**Opção 2: Ícone personalizado**
- Use ferramentas como Canva, Figma ou Adobe Illustrator
- Tema: Telefone + Google Maps
- Cores sugeridas: #4285f4 (azul Google), #34a853 (verde Google)

**Opção 3: Ícone temporário**
- Crie quadrados coloridos simples nos tamanhos corretos
- Use qualquer editor de imagem

## 📁 Estrutura final dos arquivos

```
📁 gn-extract/
├── 📄 manifest.json
├── 📄 content.js
├── 📄 popup.html
├── 📄 popup.js
├── 📄 styles.css
├── 📄 background.js
├── 📄 README.md
├── 🖼️ icon16.png
├── 🖼️ icon48.png
└── 🖼️ icon128.png
```

## 🚀 Instalação passo a passo

### 1. Preparar arquivos
```bash
# Certifique-se de ter todos os arquivos:
ls -la
# manifest.json, content.js, popup.html, popup.js, styles.css, background.js
# icon16.png, icon48.png, icon128.png
```

### 2. Abrir Chrome/Edge
- Vá para `chrome://extensions/` (Chrome)
- Ou `edge://extensions/` (Edge)

### 3. Ativar modo desenvolvedor
- Clique no botão "Modo desenvolvedor" no canto superior direito
- O botão deve ficar azul/ativado

### 4. Carregar extensão
- Clique em "Carregar sem compactação"
- Selecione a pasta com todos os arquivos
- Clique em "Selecionar pasta"

### 5. Verificar instalação
- O plug-in deve aparecer na lista de extensões
- Verifique se não há erros em vermelho
- O ícone deve aparecer na barra de ferramentas

## 🔧 Permissões necessárias

O plug-in solicitará as seguintes permissões:

- ✅ **Ler e alterar dados em google.com/maps**
- ✅ **Armazenamento local**
- ✅ **Aba ativa**

## 🧪 Testar o plug-in

### Teste básico:
1. Abra `google.com/maps`
2. Pesquise por "restaurante São Paulo"
3. Clique no ícone do GN Extract
4. Clique em "Extrair Telefones"
5. Verifique os resultados

### Teste avançado:
1. Teste com diferentes tipos de pesquisa
2. Verifique a função de copiar
3. Teste o download de arquivo
4. Verifique os highlights visuais

## ❌ Problemas comuns

### "Erro ao carregar a extensão"
- Verifique se todos os arquivos estão presentes
- Confirme se o manifest.json está correto
- Verifique se os ícones existem

### "Permissão negada"
- Recarregue a página do Google Maps
- Verifique se a extensão está ativa
- Reinicie o navegador

### "Não funciona"
- Abra o Console do Desenvolvedor (F12)
- Verifique erros JavaScript
- Confirme se está no google.com/maps

## 📝 Logs e debug

Para debugar problemas:

1. **Abra o Console** (F12)
2. **Vá para "Console"**
3. **Procure por mensagens** que começam com "GN Extract:"
4. **Verifique erros** em vermelho

### Mensagens normais:
```
GN Extract: Content script carregado
GN Extract: Popup carregado
GN Extract: Iniciando extração de telefones
GN Extract: Telefones encontrados: X
```

## 🔄 Atualizar plug-in

Para atualizar após modificações:

1. Faça as mudanças nos arquivos
2. Vá para `chrome://extensions/`
3. Clique no ícone "Atualizar" (🔄) do plug-in
4. Teste as mudanças

## 📦 Empacotar para distribuição

Para criar arquivo .crx:

1. Vá para `chrome://extensions/`
2. Clique em "Empacotar extensão"
3. Selecione a pasta do plug-in
4. Gere arquivo .crx

---

**💡 Dica:** Mantenha uma pasta backup com todos os arquivos originais!