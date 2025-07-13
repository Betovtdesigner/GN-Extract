# ✅ Checklist - GN Extract

## 📋 Verificação de Arquivos

### ✅ Arquivos Principais (Obrigatórios):
- [ ] `manifest.json` - Configuração do plug-in
- [ ] `content.js` - Script de extração
- [ ] `popup.html` - Interface do usuário
- [ ] `popup.js` - Lógica do popup
- [ ] `styles.css` - Estilização
- [ ] `background.js` - Service worker

### 🎨 Ícones (Opcionais):
- [ ] `icon16.png` - Ícone 16x16 pixels
- [ ] `icon48.png` - Ícone 48x48 pixels
- [ ] `icon128.png` - Ícone 128x128 pixels

**Alternativa:** Remover seção `"icons"` do manifest.json para usar ícone padrão

### 📚 Documentação:
- [ ] `README.md` - Documentação principal
- [ ] `INSTALACAO.md` - Instruções de instalação
- [ ] `MELHORIAS.md` - Funcionalidades futuras
- [ ] `ICONES_SIMPLES.md` - Como criar ícones
- [ ] `CHECKLIST.md` - Este arquivo

## 🚀 Passos de Instalação

### 1. Preparação
- [ ] Todos os arquivos na mesma pasta
- [ ] Navegador Chrome/Edge instalado
- [ ] Pasta organizada com nome "gn-extract"

### 2. Instalação
- [ ] Abrir `chrome://extensions/`
- [ ] Ativar "Modo desenvolvedor"
- [ ] Clicar "Carregar sem compactação"
- [ ] Selecionar pasta do plug-in
- [ ] Verificar se aparece na lista

### 3. Verificação
- [ ] Plug-in aparece na barra de ferramentas
- [ ] Sem erros em vermelho na lista
- [ ] Ícone visível (ou padrão se não tiver)
- [ ] Permissões aceitas

### 4. Teste
- [ ] Abrir google.com/maps
- [ ] Pesquisar "restaurante são paulo"
- [ ] Clicar no ícone do plug-in
- [ ] Clicar "Extrair Telefones"
- [ ] Verificar resultados

## 🔧 Resolução de Problemas

### ❌ Erro "Arquivo manifest.json não encontrado"
**Solução:**
- [ ] Verificar se manifest.json está na pasta raiz
- [ ] Verificar se nome está correto (sem espaços)
- [ ] Verificar se arquivo não está vazio

### ❌ Erro "Permissões inválidas"
**Solução:**
- [ ] Verificar sintaxe do manifest.json
- [ ] Usar ferramenta de validação JSON
- [ ] Comparar com arquivo de exemplo

### ❌ Erro "Ícones não encontrados"
**Soluções:**
- [ ] Opção 1: Adicionar arquivos icon16.png, icon48.png, icon128.png
- [ ] Opção 2: Remover seção "icons" do manifest.json
- [ ] Opção 3: Usar gerador de ícones (ver ICONES_SIMPLES.md)

### ❌ "Não funciona no Google Maps"
**Verificações:**
- [ ] URL é https://www.google.com/maps/*
- [ ] Plug-in está ativo
- [ ] Permissões foram aceitas
- [ ] Página carregou completamente

### ❌ "Nenhum telefone encontrado"
**Verificações:**
- [ ] Há empresas listadas na página
- [ ] Resultados contêm telefones visíveis
- [ ] Aguardar carregamento completo
- [ ] Tentar pesquisa diferente

## 🧪 Testes Recomendados

### Teste Básico:
1. **Pesquisa:** "padaria são paulo"
2. **Ação:** Extrair telefones
3. **Resultado:** Deve encontrar alguns telefones
4. **Exportar:** Testar copiar e download

### Teste Avançado:
1. **Pesquisas variadas:** restaurante, farmácia, loja
2. **Diferentes cidades:** rio de janeiro, brasília
3. **Funções:** copiar, baixar, highlights
4. **Performance:** tempo de extração

### Teste de Stress:
1. **Muitos resultados:** "restaurante"
2. **Rolagem:** página com muitos resultados
3. **Múltiplas extrações:** várias pesquisas seguidas
4. **Navegação:** mudanças de página

## 📊 Métricas de Sucesso

### ✅ Instalação Bem-sucedida:
- [ ] Plug-in aparece na barra
- [ ] Popup abre corretamente
- [ ] Sem erros no console
- [ ] Ícone visível

### ✅ Funcionalidade:
- [ ] Extrai pelo menos 1 telefone
- [ ] Função copiar funciona
- [ ] Download .txt funciona
- [ ] Highlights aparecem

### ✅ Usabilidade:
- [ ] Interface intuitiva
- [ ] Feedback visual claro
- [ ] Tempo de resposta aceitável
- [ ] Instruções claras

## 🔄 Atualização

### Para atualizar o plug-in:
1. [ ] Modificar arquivos
2. [ ] Ir para chrome://extensions/
3. [ ] Clicar botão "Atualizar" (🔄)
4. [ ] Testar mudanças

### Para nova versão:
1. [ ] Aumentar número em manifest.json
2. [ ] Atualizar README.md
3. [ ] Testar todas as funcionalidades
4. [ ] Documentar mudanças

## 📝 Logs para Debug

### Console Messages (normais):
```
✅ GN Extract: Content script carregado
✅ GN Extract: Popup carregado
✅ GN Extract: Iniciando extração de telefones
✅ GN Extract: Telefones encontrados: X
```

### Erros Comuns:
```
❌ Cannot read property 'textContent' of null
❌ Permission denied
❌ chrome.tabs.sendMessage is not defined
❌ Manifest file is missing or unreadable
```

## 🎯 Próximos Passos

### Após instalação bem-sucedida:
- [ ] Testar com diferentes pesquisas
- [ ] Compartilhar com outros usuários
- [ ] Coletar feedback
- [ ] Planejar melhorias

### Melhorias futuras:
- [ ] Ver arquivo MELHORIAS.md
- [ ] Implementar extração de e-mails
- [ ] Adicionar filtros
- [ ] Melhorar interface

## 🏆 Conclusão

**Plug-in pronto quando:**
- ✅ Todos os arquivos obrigatórios criados
- ✅ Instalação sem erros
- ✅ Funcionalidade básica funcionando
- ✅ Testes básicos passando

---

**🎉 Parabéns! Seu plug-in GN Extract está pronto para uso!**

**📞 Para suporte:** Verifique os arquivos de documentação ou abra uma issue no repositório.