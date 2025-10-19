# 🚀 Portfolio Pessoal - Jhon Codari

[![Deploy Status](https://img.shields.io/badge/deploy-active-success)](https://jhoncodari.github.io/portfolio/)
[![Angular](https://img.shields.io/badge/Angular-18+-red)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Portfolio pessoal desenvolvido com Angular 18+, apresentando projetos, habilidades técnicas e trajetória profissional de forma moderna e interativa.

## 🌐 Acesse o Portfolio

**🔗 [https://jhoncodari.github.io/portfolio/](https://jhoncodari.github.io/portfolio/)**

---

## 📋 Sobre o Projeto

Portfolio responsivo e moderno que demonstra minha experiência como Desenvolvedor Backend Pleno, especializado em Java/Spring. O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento frontend (que eu consigo aplicar dado que minha especialidade é Java/Spring 😂) e com foco em performance e experiência do usuário.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface limpa e profissional com tema dark
- 📱 **100% Responsivo**: Adaptado para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Bundle otimizado (~492KB)
- 🎭 **Animações Suaves**: Transições e efeitos visuais elegantes
- 🧩 **Componentização Total**: Arquitetura modular e reutilizável
- 🔄 **Deploy Automatizado**: CI/CD via GitHub Actions

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Angular 18+** - Framework principal
- **TypeScript 5.0+** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **RxJS** - Programação reativa
- **CSS Grid & Flexbox** - Layout responsivo

### Ferramentas e DevOps
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD
- **Angular CLI** - Build e desenvolvimento
- **ESLint** - Linting de código

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
│   │   │   └── contact/         # Contato
│   │   ├── shared/              # Componentes compartilhados
│   │   │   ├── header/          # Cabeçalho/Navegação
│   │   │   ├── card/            # Cards reutilizáveis
│   │   │   ├── contact-card/    # Cards de contato
│   │   │   ├── contact-form/    # Formulário de contato
│   │   │   └── timeline/        # Timeline de carreira
│   │   ├── services/            # Serviços
│   │   │   └── portfolio.service.ts
│   │   ├── interfaces/          # Interfaces TypeScript
│   │   └── animations/          # Animações reutilizáveis
│   ├── assets/                  # Recursos estáticos
│   │   └── icons/              # Ícones SVG/PNG
│   └── styles.scss             # Estilos globais
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline de deploy
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
npm run lint       # Verifica código com ESLint
```

---

## 📄 Páginas

### 🏠 Home
Página inicial com apresentação profissional, estatísticas e links para redes sociais.

### 👨‍💻 Sobre
Informações sobre minha trajetória, valores profissionais e timeline de carreira.

### 💼 Projetos
Showcase de projetos desenvolvidos, com filtros por categoria e destaques.

### 🎯 Habilidades
Visualização das principais tecnologias e ferramentas que domino.

### 📧 Contato
Múltiplas formas de contato.

---

## 🎨 Recursos de Design

- **Design System Consistente**: Variáveis CSS para cores, espaçamentos e tipografia
- **Tema Dark**: Cores otimizadas para conforto visual
- **Gradientes**: Efeitos visuais modernos em elementos chave
- **Ícones**: Suporte para SVG, PNG e emojis
- **Animações**: Fade-in, scale-in e transições suaves

---

## 📦 Build e Deploy

### Build de Produção

```bash
npm run build
```

O build otimizado será gerado na pasta `dist/portfolio-jhon/`.

### Deploy Automatizado

O projeto utiliza GitHub Actions para deploy automático:

1. Push para branch `main`
2. GitHub Actions executa o build
3. Deploy automático para GitHub Pages
4. Site atualizado em: https://jhoncodari.github.io/portfolio/

---

## 📊 Performance

- **Bundle Size**: ~492KB (otimizado)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Lighthouse Score**: 90+

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Jhon Codari** (Jonatas Severino da Silva)

- 🌐 Portfolio: [jhoncodari.github.io/portfolio](https://jhoncodari.github.io/portfolio/)
- 💼 LinkedIn: [linkedin.com/in/jonatas-silva-03400b16a](https://www.linkedin.com/in/jonatas-silva-03400b16a)
- 🐙 GitHub: [@JhonCodari](https://github.com/JhonCodari)
- 📧 Email: devjonatassilva@gmail.com
---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!**
