import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, Skill, ContactInfo } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  private projects: Project[] = [
    // Projeto Portfolio (este projeto)
    {
      id: 1,
      title: 'Portfolio Pessoal',
      description: 'Portfolio pessoal desenvolvido com Angular 18+, utilizando standalone components e design responsivo. Apresenta projetos, habilidades técnicas e informações profissionais de forma interativa e moderna.',
      shortDescription: 'Portfolio responsivo desenvolvido com Angular 18+ e componentes standalone.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5', 'CSS Grid', 'GitHub Pages'],
      githubUrl: 'https://github.com/JhonCodari/portfolio',
      liveUrl: 'https://jhoncodari.github.io/portfolio/',
      imageUrl: undefined,
      featured: true,
      category: 'frontend',
      status: 'completed',
      completedAt: new Date('2025-09-24'),
      highlights: [
        'Arquitetura 100% componentizada para reuso',
        'Design system consistente',
        'Animações e transições suaves',
        'Deploy automatizado via GitHub Actions'
      ]
    },

    // Exemplo de projeto Full Stack
    {
      id: 2,
      title: 'Sistema de Gestão Empresarial',
      description: 'Sistema completo de gestão empresarial desenvolvido com Spring Boot no backend e Angular no frontend. Inclui módulos de vendas, estoque, financeiro e relatórios avançados.',
      shortDescription: 'ERP completo com Spring Boot e Angular, incluindo gestão de vendas e estoque.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'JWT'],
      githubUrl: 'https://github.com/JhonCodari/sistema-gestao',
      liveUrl: undefined,
      imageUrl: undefined,
      featured: true,
      category: 'fullstack',
      status: 'completed',
      completedAt: new Date('2025-08-15'),
      highlights: [
        'API REST completa com documentação Swagger',
        'Sistema de autenticação JWT',
        'Dashboard com gráficos em tempo real',
        'Exportação de relatórios em PDF/Excel'
      ]
    },

    // Exemplo de projeto Mobile
    {
      id: 3,
      title: 'App de Controle Financeiro',
      description: 'Aplicativo mobile para controle financeiro pessoal, desenvolvido com tecnologias híbridas. Permite cadastro de receitas, despesas, metas financeiras e visualização de relatórios.',
      shortDescription: 'App móvel para gestão financeira pessoal com relatórios e gráficos.',
      technologies: ['React Native', 'TypeScript', 'SQLite', 'Expo', 'Chart.js'],
      githubUrl: 'https://github.com/JhonCodari/finapp',
      liveUrl: undefined,
      imageUrl: undefined,
      featured: false,
      category: 'mobile',
      status: 'in-progress',
      completedAt: new Date('2025-10-30'),
      highlights: [
        'Interface intuitiva e responsiva',
        'Gráficos interativos de gastos',
        'Sincronização em nuvem',
        'Notificações de metas financeiras'
      ]
    },

    // Exemplo de projeto Backend/API
    {
      id: 4,
      title: 'API de E-commerce',
      description: 'API RESTful robusta para e-commerce, desenvolvida com Spring Boot. Inclui gestão de produtos, carrinho de compras, processamento de pagamentos e sistema de avaliações.',
      shortDescription: 'API REST completa para e-commerce com Spring Boot e microserviços.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Docker', 'Swagger'],
      githubUrl: 'https://github.com/JhonCodari/ecommerce-api',
      liveUrl: undefined,
      imageUrl: undefined,
      featured: false,
      category: 'backend',
      status: 'completed',
      completedAt: new Date('2025-07-20'),
      highlights: [
        'Arquitetura de microserviços',
        'Cache com Redis para performance',
        'Integração com gateway de pagamento',
        'Testes automatizados com JUnit'
      ]
    },

    // Exemplo de projeto Web/Frontend
    {
      id: 5,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados empresariais, desenvolvido com React e D3.js. Apresenta métricas de vendas, performance e KPIs através de gráficos dinâmicos.',
      shortDescription: 'Dashboard de analytics com React e visualizações de dados interativas.',
      technologies: ['React', 'D3.js', 'TypeScript', 'Material-UI', 'REST API'],
      githubUrl: 'https://github.com/JhonCodari/analytics-dashboard',
      liveUrl: 'https://analytics-demo.jhoncodari.com',
      imageUrl: undefined,
      featured: true,
      category: 'frontend',
      status: 'completed',
      completedAt: new Date('2025-06-10'),
      highlights: [
        'Visualizações de dados em tempo real',
        'Interface responsiva e moderna',
        'Filtros avançados de dados',
        'Exportação de relatórios customizados'
      ]
    }
  ];

  private skills: Skill[] = [
    // Backend & Core
    { name: 'Java', level: 95, category: 'backend' },
    { name: 'Spring Framework', level: 90, category: 'backend' },
    { name: 'Spring Boot', level: 90, category: 'backend' },
    { name: 'Spring Security', level: 85, category: 'backend' },
    { name: 'Spring Data JPA', level: 85, category: 'backend' },

    // Cloud & DevOps
    { name: 'AWS', level: 85, category: 'tools' },
    { name: 'Docker', level: 80, category: 'tools' },
    { name: 'Kubernetes', level: 75, category: 'tools' },

    // Databases
    { name: 'MySQL', level: 85, category: 'database' },
    { name: 'PostgreSQL', level: 85, category: 'database' },
    { name: 'Redis', level: 80, category: 'database' },

    // Messaging & Integration
    { name: 'Apache Kafka', level: 80, category: 'tools' },
    { name: 'REST APIs', level: 95, category: 'backend' },

    // Version Control & Tools
    { name: 'Git/GitHub', level: 90, category: 'tools' },
    { name: 'GitLab', level: 85, category: 'tools' },

    // Frontend (Secondary skills)
    { name: 'Angular', level: 75, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' }
  ];

  private contactInfo: ContactInfo = {
    email: 'jhon.codari@example.com',
    linkedin: 'https://linkedin.com/in/jhoncodari',
    github: 'https://github.com/JhonCodari',
    location: 'Cabo de Santo Agostinho - PE'
  };

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(project => project.featured));
  }

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    return of(this.skills.filter(skill => skill.category === category));
  }

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  getCategoriesFilters(): Observable<any[]> {
    const categories = [
      { name: 'Frontend', key: 'frontend', icon: '🎨' },
      { name: 'Backend', key: 'backend', icon: '⚙️' },
      { name: 'Full Stack', key: 'fullstack', icon: '🚀' },
      { name: 'Mobile', key: 'mobile', icon: '📱' },
      { name: 'Web', key: 'web', icon: '🌐' },
      { name: 'Desktop', key: 'desktop', icon: '🖥️' }
    ];
    return of(categories);
  }

  getExperienceYears(): number {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }
}
