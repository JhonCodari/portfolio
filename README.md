# 🚀 Portfolio Pessoal - Jonatas Silva

[![Deploy Status](https://img.shields.io/badge/deploy-active-success)](https://jhoncodari.github.io/portfolio/)
[![Angular](https://img.shields.io/badge/Angular-19.2-red)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)

Portfolio pessoal desenvolvido com Angular 19, apresentando projetos, habilidades técnicas, certificações e trajetória profissional de forma moderna e interativa.

## 🌐 Acesse o Portfolio

**🔗 [https://jhoncodari.github.io/portfolio/](https://jhoncodari.github.io/portfolio/)**

---

## 📋 Sobre o Projeto

Portfolio responsivo e moderno que demonstra minha experiência como Desenvolvedor Backend, especializado em Java/Spring. O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento frontend (que eu consigo aplicar dado que minha especialidade é Java/Spring 😂) e com foco em performance e experiência do usuário.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface limpa e profissional com tema dark
- 📱 **100% Responsivo**: Adaptado para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Bundle otimizado (~534KB)
- 🎭 **Animações Suaves**: Transições e efeitos visuais elegantes
- 🧩 **Componentização Total**: Arquitetura modular e reutilizável com standalone components
- 📄 **Preview de PDFs**: Visualização de certificados em PDF usando PDF.js via CDN
- 🔄 **Sistema Híbrido de Certificados**: Auto-geração a partir de PDFs + configuração manual personalizada
- ✅ **Deploy Manual**: Deploy via angular-cli-ghpages para GitHub Pages

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Angular 19.2** - Framework principal (standalone components)
- **TypeScript 5.7** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **RxJS 7.8** - Programação reativa
- **CSS Grid & Flexbox** - Layout responsivo
- **PDF.js 3.11** - Renderização de PDFs via CDN

### Ferramentas e DevOps
- **GitHub Pages** - Hosting
- **angular-cli-ghpages** - Deploy para GitHub Pages
- **Angular CLI 19.2** - Build e desenvolvimento

---

## 📂 Estrutura do Projeto

```
portfolio-jhon/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes das páginas
│   │   │   ├── home/            # Página inicial
│   │   │   ├── about/           # Sobre mim
│   │   │   ├── projects/        # Projetos
│   │   │   ├── skills/          # Habilidades
│   │   │   ├── certifications/  # Certificações e cursos
│   │   │   │   ├── aws-certification-card/
│   │   │   │   ├── course-card/
│   │   │   │   └── pdf-preview/ # Preview de PDFs com PDF.js
│   │   │   ├── contact/         # Contato
│   │   │   ├── header/          # Cabeçalho/Navegação
│   │   │   └── footer/          # Rodapé
│   │   ├── shared/              # Componentes compartilhados
│   │   │   ├── card/            # Cards reutilizáveis
│   │   │   ├── category-filters/# Filtros de categoria
│   │   │   ├── contact-card/    # Cards de contato
│   │   │   ├── contact-form/    # Formulário de contato
│   │   │   ├── project-card/    # Card de projeto
│   │   │   ├── skill-card/      # Card de habilidade
│   │   │   ├── skill-icon/      # Ícones de habilidades
│   │   │   └── timeline/        # Timeline de carreira
│   │   ├── services/            # Serviços
│   │   │   └── portfolio.service.ts
│   │   ├── interfaces/          # Interfaces TypeScript
│   │   └── animations/          # Animações reutilizáveis
│   ├── assets/                  # Recursos estáticos
│   │   ├── icons/              # Ícones SVG/PNG
│   │   └── certifications/     # PDFs de certificados
│   │       ├── certificados Alura/
│   │       ├── certificados Digital Innovation One/
│   │       ├── certificados empresa nttdata/
│   │       └── certificados Udemy/
│   └── styles.scss             # Estilos globais
├── angular.json                # Configuração do Angular CLI
├── package.json                # Dependências do projeto
└── README.md
```

---

## 🚀 Executando Localmente

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Angular CLI

### Instalação

```bash
# Clone o repositório
git clone https://github.com/JhonCodari/portfolio.git

# Navegue até o diretório do projeto
cd portfolio/portfolio-jhon

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm start

# Acesse http://localhost:4200
```

### Scripts Disponíveis

```bash
npm start          # Inicia servidor de desenvolvimento
npm run build      # Build de produção
npm run deploy     # Deploy para GitHub Pages
npm test           # Executa testes
```

---

## 📄 Páginas

### 🏠 Home
Página inicial com apresentação profissional, estatísticas e links para redes sociais.

### 👨‍💻 Sobre
Informações sobre minha trajetória, valores profissionais e timeline de carreira.

### 💼 Projetos
Showcase de projetos desenvolvidos, com filtros por categoria e destaques.

### 🎓 Certificações
Exibição de certificações AWS e cursos concluídos de múltiplas plataformas (Alura, Digital Innovation One, Udemy, entre outras...), com preview de PDFs, filtros por tecnologia e contabilização de horas de estudo.

### 🎯 Habilidades
Visualização das principais tecnologias e ferramentas que domino, organizadas por categoria (Backend, Frontend, Database, Tools e etc...).

### 📧 Contato
Múltiplas formas de contato (email, LinkedIn, GitHub).

---

## 🎨 Recursos de Design

- **Design System Consistente**: Variáveis CSS para cores, espaçamentos e tipografia
- **Tema Dark**: Cores otimizadas para conforto visual (#1a1a2e, #16213e, #0f3460)
- **Gradientes**: Efeitos visuais modernos em elementos chave
- **Ícones**: Suporte para SVG, PNG e emojis
- **Animações**: Fade-in, scale-in e transições suaves via Angular Animations
- **Responsividade**: Breakpoints para mobile (<768px), tablet e desktop

---

## 📦 Build e Deploy

### Build de Produção

```bash
npm run build
```

O build otimizado será gerado na pasta `dist/portfolio-jhon/`.

### Deploy via angular-cli-ghpages

O deploy é feito manualmente via angular-cli-ghpages:

```bash
npm run deploy
```

Este comando:
1. Executa o build de produção com `--base-href=/portfolio/`
2. Utiliza o angular-cli-ghpages para fazer push do conteúdo para a branch `gh-pages`
3. Site atualizado em: https://jhoncodari.github.io/portfolio/

---

## 📊 Performance

- **Bundle Size**: ~534KB (otimizado)
  - main.js: ~485KB
  - polyfills.js: ~35KB
  - styles.css: ~5KB

---

## 🔐 Segurança

Este é um projeto de portfólio frontend estático. Não há credenciais, chaves de API ou informações sensíveis no código-fonte. Todos os certificados PDF são documentos públicos já emitidos pelas instituições.

---

## 📝 Licença e Direitos Autorais

**© 2025-2026 Jonatas Silva. Todos os direitos reservados.**

Este projeto é de propriedade exclusiva do autor e **não está sob licença pública**. O código-fonte está disponível publicamente para fins de demonstração do portfólio, mas todos os direitos são reservados.

**Não é permitido:**
- Copiar, modificar ou distribuir este código para uso comercial ou pessoal
- Utilizar o design ou estrutura do projeto em outros portfólios
- Republicar este código como seu próprio trabalho

Se você deseja utilizar alguma parte deste projeto, entre em contato para solicitar autorização.

---

## 👤 Autor

**Jonatas Silva**

- 🌐 Portfolio: [jhoncodari.github.io/portfolio](https://jhoncodari.github.io/portfolio/)
- 💼 LinkedIn: [linkedin.com/in/Jonatas Silva](https://www.linkedin.com/in/jonatas-silva-03400b16a/)
- 🐙 GitHub: [@JhonCodari](https://github.com/JhonCodari)

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!**
