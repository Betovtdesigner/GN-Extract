# 🧠 GN Extract - Google Maps Phone Extractor

Plug-in para navegador Chrome/Edge que extrai números de telefone das empresas listadas no Google Maps.

## � Início Rápido

1. **Baixe todos os arquivos** deste repositório
2. **Vá para** `chrome://extensions/`
3. **Ative o "Modo desenvolvedor"**
4. **Clique em "Carregar sem compactação"**
5. **Selecione a pasta** com os arquivos
6. **Abra o Google Maps** e pesquise empresas
7. **Clique no ícone** do GN Extract
8. **Clique "Extrair Telefones"** e pronto!

📖 **Instruções completas:** Veja [INSTALACAO.md](INSTALACAO.md)  
✅ **Checklist:** Veja [CHECKLIST.md](CHECKLIST.md)

## �📁 Funcionalidades

- ✅ Extrai números de telefone de empresas no Google Maps
- ✅ Interface intuitiva e moderna
- ✅ Copia todos os telefones numerados para clipboard
- ✅ Baixa arquivo .txt com os resultados
- ✅ Destaca visualmente os resultados encontrados
- ✅ Menu de contexto no clique direito

## 🚀 Como instalar

### Método 1: Instalação manual (Desenvolvedor)

1. **Baixe os arquivos** deste repositório
2. **Abra o Chrome** e vá para `chrome://extensions/`
3. **Ative o "Modo desenvolvedor"** no canto superior direito
4. **Clique em "Carregar sem compactação"**
5. **Selecione a pasta** onde estão os arquivos do plug-in
6. **Pronto!** O plug-in será instalado

### Método 2: Arquivo .crx (se disponível)

1. Baixe o arquivo `.crx` 
2. Arraste para `chrome://extensions/`
3. Confirme a instalação

## 📱 Como usar

### Passo a passo:

1. **Abra o Google Maps** no navegador
2. **Pesquise por empresas** (ex: "padaria em São Paulo")
3. **Clique no ícone** do GN Extract na barra de ferramentas
4. **Clique em "Extrair Telefones"**
5. **Visualize os resultados** encontrados
6. **Copie** ou **baixe** os telefones

### Opções de exportação:

- **📋 Copiar Tudo**: Copia todos os telefones numerados para clipboard
- **📥 Baixar .txt**: Baixa arquivo de texto com todos os resultados

## 🛠️ Arquivos do projeto

```
📁 gn-extract/
├── 📄 manifest.json        # Configurações do plug-in
├── 📄 content.js           # Script de extração
├── 📄 popup.html           # Interface do usuário
├── 📄 popup.js             # Lógica do popup
├── 📄 styles.css           # Estilização
├── 📄 background.js        # Service worker
├── 📄 README.md            # Documentação principal
├── 📄 INSTALACAO.md        # Instruções detalhadas
├── 📄 MELHORIAS.md         # Funcionalidades futuras
├── 📄 ICONES_SIMPLES.md    # Como criar ícones
├── 📄 CHECKLIST.md         # Verificação passo a passo
└── 🖼️ icon*.png            # Ícones do plug-in (opcional)
```

## 🔍 Detalhes técnicos

### Seletores utilizados:
- `[data-result-index]` - Resultados indexados
- `[role="article"]` - Artigos de empresas
- `.hfpxzc` - Container de resultados
- `.VkpGBb` - Elementos de negócios

### Regex para telefones:
```javascript
/(\(?\d{2}\)?\s?\d{4,5}-?\d{4}|\(?\d{2}\)?\s?\d{8,9})/g
```

### Permissões necessárias:
- `activeTab` - Acessar aba ativa
- `storage` - Armazenar configurações
- `https://www.google.com/maps/*` - Funcionar no Google Maps

## 🎨 Recursos visuais

- ✨ Design moderno e responsivo
- 🎯 Highlights visuais nos resultados
- 📊 Contador de telefones encontrados
- 🔄 Feedback visual durante extração
- 📱 Interface otimizada para popup

## 🐛 Troubleshooting

### Problemas comuns:

**❌ "Abra o Google Maps primeiro!"**
- Certifique-se de estar em `google.com/maps`

**❌ "Nenhum telefone encontrado"**
- Verifique se há empresas listadas na página
- Faça uma pesquisa por empresas locais
- Aguarde o carregamento completo da página

**❌ "Erro de conexão"**
- Recarregue a página do Google Maps
- Verifique se o plug-in está ativo

### Dicas para melhor uso:

1. **Aguarde o carregamento completo** antes de extrair
2. **Faça pesquisas específicas** (ex: "restaurante", "loja")
3. **Role a página** para carregar mais resultados
4. **Use termos locais** para melhores resultados

## 📄 Licença

Este projeto é open source e pode ser usado livremente.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

## 📖 Documentação Completa

- 📋 **[CHECKLIST.md](CHECKLIST.md)** - Verificação passo a passo
- 🛠️ **[INSTALACAO.md](INSTALACAO.md)** - Instruções detalhadas de instalação
- 🎨 **[ICONES_SIMPLES.md](ICONES_SIMPLES.md)** - Como criar ícones facilmente
- 🚀 **[MELHORIAS.md](MELHORIAS.md)** - Funcionalidades futuras e melhorias
- 📄 **[README.md](README.md)** - Este arquivo (documentação principal)

## 🏆 Status do Projeto

✅ **Funcionalidade básica:** Extração de telefones  
✅ **Interface completa:** Popup moderno e responsivo  
✅ **Exportação:** Clipboard e arquivo .txt  
✅ **Documentação:** Guias completos  
🔄 **Próximos passos:** Ver [MELHORIAS.md](MELHORIAS.md)  

---

**Desenvolvido com ❤️ para facilitar a extração de contatos do Google Maps**