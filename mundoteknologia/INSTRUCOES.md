# 🚀 Instruções para Abrir no VS Code

## Passo a Passo

### 1. Abrir o Projeto no VS Code
1. Abra o Visual Studio Code
2. Vá em **File** > **Open Folder** (ou Ctrl+K, Ctrl+O)
3. Navegue até a pasta `mundoteknologia` e selecione ela
4. Clique em **Selecionar Pasta**

### 2. Instalar Extensões Recomendadas
Quando abrir o projeto, o VS Code pode sugerir instalar extensões recomendadas. Aceite para ter a melhor experiência:

- **Live Server** - Para visualizar o site em tempo real
- **Prettier** - Para formatação automática do código
- **Auto Rename Tag** - Para renomear tags HTML automaticamente
- **Path Intellisense** - Para autocompletar caminhos de arquivos

### 3. Visualizar o Site
1. Clique com o botão direito no arquivo `index.html`
2. Selecione **"Open with Live Server"**
3. O site abrirá automaticamente no seu navegador
4. Qualquer alteração que você fizer será atualizada automaticamente

### 4. Estrutura dos Arquivos

```
mundoteknologia/
├── index.html              # Página principal (HTML)
├── css/
│   └── style.css           # Estilos e design (CSS)
├── js/
│   └── script.js           # Interatividade (JavaScript)
├── images/                 # Suas imagens (vazia - adicione suas fotos)
├── assets/                 # Outros recursos (vazia)
├── .vscode/                # Configurações do VS Code
│   ├── settings.json       # Configurações do projeto
│   └── extensions.json     # Extensões recomendadas
├── README.md               # Documentação completa
└── INSTRUCOES.md          # Este arquivo
```

## 🎨 Como Personalizar

### Alterar Informações Pessoais
**Arquivo: `index.html`**
- Linha 6: Altere o título da página
- Linha 17: Mude o nome "Mundoteknologia"
- Linha 28-30: Personalize o texto de boas-vindas
- Linha 39-41: Edite a seção "Sobre Mim"

### Adicionar Seus Projetos
**Arquivo: `js/script.js`**
- Linha 4-47: Edite o array `portfolioProjects`
- Substitua os projetos de exemplo pelos seus
- Adicione suas imagens na pasta `images/`

Exemplo:
```javascript
{
    title: "Meu App Incrível",
    description: "Descrição do meu projeto...",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "images/meu-app.jpg",
    link: "https://meuapp.com"
}
```

### Mudar Cores
**Arquivo: `css/style.css`**
- Linha 9-18: Variáveis de cores CSS
- Altere os valores hexadecimais para suas cores preferidas

### Adicionar Suas Imagens
1. Coloque suas imagens na pasta `images/`
2. Atualize os caminhos no arquivo `js/script.js`
3. Use formatos: JPG, PNG, WebP

## 🔧 Dicas Importantes

### Para Melhor Performance:
- Otimize suas imagens (use ferramentas como TinyPNG)
- Mantenha arquivos organizados nas pastas corretas
- Teste sempre no navegador após mudanças

### Para Responsividade:
- O site já é responsivo (funciona em mobile/tablet)
- Teste em diferentes tamanhos de tela
- Use as ferramentas de desenvolvedor do navegador (F12)

### Para SEO:
- Altere o título da página (tag `<title>`)
- Adicione meta descriptions
- Use textos descritivos nas imagens (atributo `alt`)

## 🌐 Como Colocar Online

### Opção 1: GitHub Pages (Gratuito)
1. Crie uma conta no GitHub
2. Crie um repositório novo
3. Faça upload dos arquivos
4. Ative o GitHub Pages nas configurações

### Opção 2: Netlify (Gratuito)
1. Acesse netlify.com
2. Arraste a pasta do projeto para o site
3. Seu site estará online em segundos

### Opção 3: Vercel (Gratuito)
1. Acesse vercel.com
2. Conecte com GitHub ou faça upload direto
3. Deploy automático

## 📞 Precisa de Ajuda?

Se tiver dúvidas:
1. Consulte o arquivo `README.md` para mais detalhes
2. Use o Google para pesquisar sobre HTML, CSS e JavaScript
3. Comunidades como Stack Overflow são muito úteis

## ✅ Checklist Final

- [ ] Projeto aberto no VS Code
- [ ] Extensão Live Server instalada
- [ ] Site funcionando no navegador
- [ ] Informações pessoais atualizadas
- [ ] Projetos personalizados adicionados
- [ ] Imagens próprias incluídas
- [ ] Cores ajustadas ao seu gosto
- [ ] Testado em mobile/tablet
- [ ] Pronto para colocar online!

---

**Parabéns! Seu site está pronto! 🎉**

