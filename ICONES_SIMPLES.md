# 🎨 Criando Ícones Simples - GN Extract

## 🏁 Opção Rápida: Ícones SVG Inline

Se você não quer criar arquivos PNG, pode usar ícones SVG inline no `manifest.json`:

### 1. Atualizar manifest.json

```json
{
  "manifest_version": 3,
  "name": "GN Extract - Google Maps Phone Extractor",
  "version": "1.0.0",
  "description": "Extrai números de telefone das empresas listadas no Google Maps",
  "permissions": [
    "activeTab",
    "storage"
  ],
  "host_permissions": [
    "https://www.google.com/maps/*"
  ],
  "content_scripts": [
    {
      "matches": ["https://www.google.com/maps/*"],
      "js": ["content.js"],
      "run_at": "document_idle"
    }
  ],
  "action": {
    "default_popup": "popup.html",
    "default_title": "GN Extract"
  },
  "background": {
    "service_worker": "background.js"
  }
}
```

**Nota:** Remova a seção `"icons"` do manifest.json para usar ícones padrão.

## 🎯 Opção 2: Criar Ícones PNG Simples

### Usando código HTML/CSS para gerar ícones:

Crie um arquivo `icon-generator.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .icon {
            width: 128px;
            height: 128px;
            background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 60px;
            color: white;
            font-family: Arial, sans-serif;
            margin: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        
        .icon-16 {
            width: 16px;
            height: 16px;
            font-size: 8px;
            border-radius: 3px;
        }
        
        .icon-48 {
            width: 48px;
            height: 48px;
            font-size: 24px;
            border-radius: 8px;
        }
        
        .icon-128 {
            width: 128px;
            height: 128px;
            font-size: 60px;
            border-radius: 20px;
        }
    </style>
</head>
<body>
    <h1>GN Extract - Gerador de Ícones</h1>
    
    <div class="icon icon-16">🧠</div>
    <div class="icon icon-48">🧠</div>
    <div class="icon icon-128">🧠</div>
    
    <p>Clique com botão direito nos ícones acima e "Salvar imagem como..."</p>
    
    <script>
        // Gerar ícones programaticamente
        function generateIcon(size, emoji) {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            
            // Fundo gradiente
            const gradient = ctx.createLinearGradient(0, 0, size, size);
            gradient.addColorStop(0, '#4285f4');
            gradient.addColorStop(1, '#34a853');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, size, size);
            
            // Emoji
            ctx.font = `${size * 0.6}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'white';
            ctx.fillText(emoji, size / 2, size / 2);
            
            return canvas.toDataURL();
        }
        
        // Gerar e baixar ícones
        function downloadIcons() {
            const sizes = [16, 48, 128];
            sizes.forEach(size => {
                const dataUrl = generateIcon(size, '🧠');
                const a = document.createElement('a');
                a.href = dataUrl;
                a.download = `icon${size}.png`;
                a.click();
            });
        }
        
        // Adicionar botão para download
        const button = document.createElement('button');
        button.textContent = 'Baixar Todos os Ícones';
        button.onclick = downloadIcons;
        button.style.cssText = `
            background: #4285f4;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            margin: 20px;
        `;
        document.body.appendChild(button);
    </script>
</body>
</html>
```

### Como usar:

1. **Salve o código acima** como `icon-generator.html`
2. **Abra no navegador**
3. **Clique em "Baixar Todos os Ícones"**
4. **Os arquivos serão salvos automaticamente**

## 🖼️ Opção 3: Ícones SVG Inline

Crie arquivos SVG simples:

### icon16.svg
```svg
<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#34a853;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="16" height="16" rx="3" fill="url(#grad1)"/>
  <text x="8" y="12" text-anchor="middle" fill="white" font-size="8" font-family="Arial">🧠</text>
</svg>
```

### icon48.svg
```svg
<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#34a853;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="48" height="48" rx="8" fill="url(#grad1)"/>
  <text x="24" y="32" text-anchor="middle" fill="white" font-size="24" font-family="Arial">🧠</text>
</svg>
```

### icon128.svg
```svg
<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#34a853;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="20" fill="url(#grad1)"/>
  <text x="64" y="85" text-anchor="middle" fill="white" font-size="60" font-family="Arial">🧠</text>
</svg>
```

### Converter SVG para PNG:

1. **Abra cada arquivo SVG no navegador**
2. **Clique com botão direito**
3. **"Salvar imagem como..."**
4. **Escolha formato PNG**

## 🎨 Opção 4: Ícones de Texto Simples

Para teste rápido, crie ícones simples usando apenas texto:

### Usando Paint/GIMP:

1. **Crie imagem** com fundo colorido
2. **Adicione texto** "GN" ou "📞"
3. **Salve nos tamanhos** 16x16, 48x48, 128x128

### Usando Canva:

1. **Acesse canva.com**
2. **Crie design personalizado**
3. **Tamanhos**: 16x16, 48x48, 128x128
4. **Adicione emoji** 🧠 ou 📞
5. **Fundo**: Gradiente azul/verde
6. **Baixe como PNG**

## 🔧 Opção 5: Ícones de Texto Unicode

Use caracteres Unicode simples:

```css
.icon-unicode {
    font-family: 'Segoe UI Emoji', 'Noto Color Emoji', 'Apple Color Emoji';
    font-size: 16px;
    background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
    color: white;
    padding: 2px;
    border-radius: 2px;
}
```

Caracteres úteis:
- 🧠 (cérebro)
- 📞 (telefone)
- 🗺️ (mapa)
- 🔍 (lupa)
- 📊 (gráfico)

## 🚀 Teste Rápido

Para testar sem ícones:

1. **Remova a seção `"icons"`** do manifest.json
2. **Instale a extensão**
3. **Chrome usará ícone padrão**
4. **Adicione ícones depois**

## 📝 Comandos Úteis

```bash
# Converter SVG para PNG (se tiver ImageMagick)
convert icon16.svg icon16.png
convert icon48.svg icon48.png
convert icon128.svg icon128.png

# Verificar tamanhos
file icon*.png
```

## 💡 Dicas

1. **Use cores do Google**: #4285f4 (azul), #34a853 (verde)
2. **Mantenha simples**: Ícones pequenos precisam ser claros
3. **Teste em diferentes tamanhos**: Verifique legibilidade
4. **Use emojis**: São universais e funcionam bem

---

**🎯 Escolha a opção que for mais prática para você!**