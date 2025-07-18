# Mundoteknologia - Portfólio de Aplicativos

Um site moderno e responsivo para apresentar seu portfólio de aplicativos e projetos.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional com gradientes e animações
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Efeitos de scroll, hover e transições elegantes
- **Portfólio Dinâmico**: Seção de projetos facilmente customizável
- **Formulário de Contato**: Sistema de contato com validação
- **Performance Otimizada**: Código limpo e otimizado

## 📁 Estrutura do Projeto

```
mundoteknologia/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── script.js       # JavaScript interativo
├── images/             # Pasta para suas imagens
├── assets/             # Pasta para outros recursos
└── README.md           # Este arquivo
```

## 🛠️ Como Usar

1. **Abrir no VS Code**:
   - Abra o VS Code
   - Vá em File > Open Folder
   - Selecione a pasta `mundoteknologia`

2. **Personalizar o Conteúdo**:
   - Edite o arquivo `index.html` para alterar textos e informações
   - Modifique o array `portfolioProjects` no arquivo `js/script.js` para adicionar seus projetos
   - Adicione suas imagens na pasta `images/`

3. **Visualizar o Site**:
   - Instale a extensão "Live Server" no VS Code
   - Clique com o botão direito no arquivo `index.html`
   - Selecione "Open with Live Server"

## 🎨 Personalização

### Cores
As cores principais estão definidas no arquivo CSS como variáveis CSS:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... outras cores */
}
```

### Projetos do Portfólio
Edite o array `portfolioProjects` no arquivo `js/script.js`:
```javascript
const portfolioProjects = [
    {
        title: "Seu Projeto",
        description: "Descrição do projeto",
        technologies: ["Tech1", "Tech2"],
        image: "caminho/para/imagem.jpg",
        link: "https://seulink.com"
    }
    // ... mais projetos
];
```

### Informações Pessoais
- Altere o título e descrições no arquivo `index.html`
- Modifique a seção "Sobre Mim" com suas informações
- Atualize as informações de contato

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🌟 Funcionalidades JavaScript

- Animações de scroll
- Navegação suave
- Efeitos de parallax
- Validação de formulário
- Menu mobile responsivo
- Carregamento dinâmico de projetos

## 🚀 Deploy

Para colocar o site online, você pode usar:
- GitHub Pages
- Netlify
- Vercel
- Qualquer servidor web

Basta fazer upload dos arquivos para o servidor.

## 📞 Suporte

Se precisar de ajuda ou tiver dúvidas, entre em contato!

---

**Mundoteknologia** - Transformando ideias em realidade através da tecnologia.

