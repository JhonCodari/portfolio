import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, Skill, ContactInfo } from '../interfaces/project.interface';
import { AboutValue, PersonalValue, TimelineItem } from '../interfaces/about.interface';
import { Certification, CertificationFilter } from '../interfaces/certification.interface';

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
    // {
    //   id: 2,
    //   title: 'Sistema de Gestão Empresarial',
    //   description: 'Sistema completo de gestão empresarial desenvolvido com Spring Boot no backend e Angular no frontend. Inclui módulos de vendas, estoque, financeiro e relatórios avançados.',
    //   shortDescription: 'ERP completo com Spring Boot e Angular, incluindo gestão de vendas e estoque.',
    //   technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'JWT'],
    //   githubUrl: 'https://github.com/JhonCodari/sistema-gestao',
    //   liveUrl: undefined,
    //   imageUrl: undefined,
    //   featured: true,
    //   category: 'fullstack',
    //   status: 'completed',
    //   completedAt: new Date('2025-08-15'),
    //   highlights: [
    //     'API REST completa com documentação Swagger',
    //     'Sistema de autenticação JWT',
    //     'Dashboard com gráficos em tempo real',
    //     'Exportação de relatórios em PDF/Excel'
    //   ]
    // },

    // Exemplo de projeto Mobile
    // {
    //   id: 3,
    //   title: 'App de Controle Financeiro',
    //   description: 'Aplicativo mobile para controle financeiro pessoal, desenvolvido com tecnologias híbridas. Permite cadastro de receitas, despesas, metas financeiras e visualização de relatórios.',
    //   shortDescription: 'App móvel para gestão financeira pessoal com relatórios e gráficos.',
    //   technologies: ['React Native', 'TypeScript', 'SQLite', 'Expo', 'Chart.js'],
    //   githubUrl: 'https://github.com/JhonCodari/finapp',
    //   liveUrl: undefined,
    //   imageUrl: undefined,
    //   featured: false,
    //   category: 'mobile',
    //   status: 'in-progress',
    //   completedAt: new Date('2025-10-30'),
    //   highlights: [
    //     'Interface intuitiva e responsiva',
    //     'Gráficos interativos de gastos',
    //     'Sincronização em nuvem',
    //     'Notificações de metas financeiras'
    //   ]
    // },

    // Exemplo de projeto Backend/API
    // {
    //   id: 4,
    //   title: 'API de E-commerce',
    //   description: 'API RESTful robusta para e-commerce, desenvolvida com Spring Boot. Inclui gestão de produtos, carrinho de compras, processamento de pagamentos e sistema de avaliações.',
    //   shortDescription: 'API REST completa para e-commerce com Spring Boot e microserviços.',
    //   technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Docker', 'Swagger'],
    //   githubUrl: 'https://github.com/JhonCodari/ecommerce-api',
    //   liveUrl: undefined,
    //   imageUrl: undefined,
    //   featured: false,
    //   category: 'backend',
    //   status: 'completed',
    //   completedAt: new Date('2025-07-20'),
    //   highlights: [
    //     'Arquitetura de microserviços',
    //     'Cache com Redis para performance',
    //     'Integração com gateway de pagamento',
    //     'Testes automatizados com JUnit'
    //   ]
    // },

    // Exemplo de projeto Web/Frontend
    // {
    //   id: 5,
    //   title: 'Dashboard Analytics',
    //   description: 'Dashboard interativo para análise de dados empresariais, desenvolvido com React e D3.js. Apresenta métricas de vendas, performance e KPIs através de gráficos dinâmicos.',
    //   shortDescription: 'Dashboard de analytics com React e visualizações de dados interativas.',
    //   technologies: ['React', 'D3.js', 'TypeScript', 'Material-UI', 'REST API'],
    //   githubUrl: 'https://github.com/JhonCodari/analytics-dashboard',
    //   liveUrl: 'https://analytics-demo.jhoncodari.com',
    //   imageUrl: undefined,
    //   featured: true,
    //   category: 'frontend',
    //   status: 'completed',
    //   completedAt: new Date('2025-06-10'),
    //   highlights: [
    //     'Visualizações de dados em tempo real',
    //     'Interface responsiva e moderna',
    //     'Filtros avançados de dados',
    //     'Exportação de relatórios customizados'
    //   ]
    // }
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
    email: 'devjonatassilva@gmail.com',
    linkedin: 'https://linkedin.com/in/jhoncodari',
    github: 'https://github.com/JhonCodari',
    location: 'Cabo de Santo Agostinho - PE'
  };

  private certifications: Certification[] = [
    // Certificações AWS (Featured)
    {
      id: 1,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      imageUrl: 'assets/certifications/aws-cloud-practitioner.png',
      credentialUrl: 'https://www.credly.com/badges/your-badge-id',
      issuedDate: new Date('2023-03-15'),
      expiryDate: new Date('2026-03-15'),
      type: 'aws',
      technologies: ['AWS', 'Cloud Computing'],
      featured: true,
      description: 'Certificação fundamental da AWS que valida conhecimentos de cloud computing, serviços AWS e melhores práticas.'
    },
    {
      id: 2,
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      imageUrl: 'assets/certifications/aws-solutions-architect.png',
      credentialUrl: 'https://www.credly.com/badges/your-badge-id',
      issuedDate: new Date('2023-06-20'),
      expiryDate: new Date('2026-06-20'),
      type: 'aws',
      technologies: ['AWS', 'Cloud Architecture', 'Solutions Design'],
      featured: true,
      description: 'Certificação que valida habilidades em design e implementação de sistemas distribuídos na AWS.'
    },

    // // Cursos de Backend
    // {
    //   id: 3,
    //   title: 'Formação Java e Spring Framework',
    //   issuer: 'Alura',
    //   imageUrl: 'assets/certifications/alura-java.png',
    //   credentialUrl: 'https://cursos.alura.com.br/certificate/your-cert',
    //   issuedDate: new Date('2021-08-10'),
    //   type: 'course',
    //   technologies: ['Java', 'Spring Boot', 'Spring MVC', 'JPA'],
    //   description: 'Formação completa em desenvolvimento Java com Spring Framework.'
    // },
    // {
    //   id: 4,
    //   title: 'Microservices com Spring Cloud',
    //   issuer: 'Udemy',
    //   imageUrl: 'assets/certifications/udemy-microservices.png',
    //   credentialUrl: 'https://udemy.com/certificate/your-cert',
    //   issuedDate: new Date('2022-03-15'),
    //   type: 'course',
    //   technologies: ['Java', 'Spring Cloud', 'Microservices', 'Docker'],
    //   description: 'Curso avançado sobre arquitetura de microserviços com Spring Cloud.'
    // },
    // {
    //   id: 5,
    //   title: 'API REST com Spring Boot',
    //   issuer: 'Digital Innovation One',
    //   imageUrl: 'assets/certifications/dio-spring-boot.png',
    //   credentialUrl: 'https://dio.me/certificate/your-cert',
    //   issuedDate: new Date('2021-11-20'),
    //   type: 'course',
    //   technologies: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL'],
    //   description: 'Desenvolvimento de APIs RESTful profissionais com Spring Boot.'
    // },

    // // Cursos de Cloud e DevOps
    // {
    //   id: 6,
    //   title: 'Docker e Kubernetes',
    //   issuer: 'Alura',
    //   imageUrl: 'assets/certifications/alura-docker.png',
    //   credentialUrl: 'https://cursos.alura.com.br/certificate/your-cert',
    //   issuedDate: new Date('2022-07-10'),
    //   type: 'course',
    //   technologies: ['Docker', 'Kubernetes', 'DevOps'],
    //   description: 'Containerização e orquestração de aplicações com Docker e Kubernetes.'
    // },
    // {
    //   id: 7,
    //   title: 'AWS para Desenvolvedores',
    //   issuer: 'Udemy',
    //   imageUrl: 'assets/certifications/udemy-aws.png',
    //   credentialUrl: 'https://udemy.com/certificate/your-cert',
    //   issuedDate: new Date('2023-01-15'),
    //   type: 'course',
    //   technologies: ['AWS', 'EC2', 'S3', 'Lambda', 'RDS'],
    //   description: 'Curso prático sobre os principais serviços AWS para desenvolvedores.'
    // },

    // // Cursos de Banco de Dados
    // {
    //   id: 8,
    //   title: 'Modelagem de Dados e SQL',
    //   issuer: 'Alura',
    //   imageUrl: 'assets/certifications/alura-sql.png',
    //   credentialUrl: 'https://cursos.alura.com.br/certificate/your-cert',
    //   issuedDate: new Date('2021-05-20'),
    //   type: 'course',
    //   technologies: ['SQL', 'MySQL', 'PostgreSQL', 'Database Design'],
    //   description: 'Modelagem de dados e consultas SQL avançadas.'
    // },
    // {
    //   id: 9,
    //   title: 'Redis para Aplicações de Alta Performance',
    //   issuer: 'Digital Innovation One',
    //   imageUrl: 'assets/certifications/dio-redis.png',
    //   credentialUrl: 'https://dio.me/certificate/your-cert',
    //   issuedDate: new Date('2022-09-10'),
    //   type: 'course',
    //   technologies: ['Redis', 'Cache', 'Performance'],
    //   description: 'Implementação de cache e otimização de performance com Redis.'
    // },

    // // Cursos de Frontend (secundário)
    // {
    //   id: 10,
    //   title: 'Angular: Fundamentos e Boas Práticas',
    //   issuer: 'Alura',
    //   imageUrl: 'assets/certifications/alura-angular.png',
    //   credentialUrl: 'https://cursos.alura.com.br/certificate/your-cert',
    //   issuedDate: new Date('2023-11-15'),
    //   type: 'course',
    //   technologies: ['Angular', 'TypeScript', 'RxJS'],
    //   description: 'Desenvolvimento de aplicações web modernas com Angular.'
    // },

    // // Cursos da Empresa
    // {
    //   id: 11,
    //   title: 'Arquitetura de Software Corporativa',
    //   issuer: 'Empresa',
    //   imageUrl: 'assets/certifications/company-architecture.png',
    //   credentialUrl: '#',
    //   issuedDate: new Date('2023-04-10'),
    //   type: 'course',
    //   technologies: ['Architecture', 'Design Patterns', 'Best Practices'],
    //   description: 'Curso interno sobre arquitetura de software e padrões de design corporativos.'
    // }
  ];

  // ========================================
  // CERTIFICADOS MANUAIS (Sobrescrevem os automáticos)
  // ========================================
  // Adicione aqui certificados com informações personalizadas
  // Se houver um PDF com nome similar, as informações manuais terão prioridade
  private manualCertificates: Certification[] = [
    // Exemplo de certificado manual customizado:
    // {
    //   id: 1000,
    //   title: 'Java e Spring - WebFlux',
    //   issuer: 'Alura',
    //   imageUrl: 'assets/icons/java-icon.svg',
    //   credentialUrl: 'https://cursos.alura.com.br/certificate/xxxxx',
    //   pdfPath: 'assets/certifications/certificados Alura/Java e Spring - construindo aplicações reativas com WebFlux.pdf',
    //   isPdf: true,
    //   issuedDate: new Date('2024-11-15'),
    //   type: 'course',
    //   technologies: ['Java', 'Spring', 'WebFlux', 'Reactive'],
    //   hours: 12,
    //   instructor: 'Instrutor Alura',
    //   description: 'Curso completo sobre programação reativa com Spring WebFlux.',
    //   featured: true
    // }
  ];

  // ========================================
  // MÉTODO PARA AUTO-GERAR CERTIFICADOS DOS PDFs
  // ========================================
  private getAutoGeneratedCertificates(): Certification[] {
    const certificates: Certification[] = [];
    let autoId = 2000; // IDs automáticos começam em 2000

    // Certificados Alura
    const aluraCertificates = [
      { file: 'Java e Spring - Realizando processamento em lote com Spring Batch.pdf', tech: ['Java', 'Spring', 'Spring Batch'] },
      { file: 'Java e Spring - construindo aplicações reativas com WebFlux.pdf', tech: ['Java', 'Spring', 'WebFlux', 'Reactive'] },
      { file: 'TypeScript na prática implemente um projeto completo com TypeScript e módulos.pdf', tech: ['TypeScript', 'JavaScript'] },
      { file: 'TypeScript -  aplicando orientação a objetos no Front-end.pdf', tech: ['TypeScript', 'OOP', 'Frontend'] },
      { file: 'Kafka produtores, consumidores e streams.pdf', tech: ['Kafka', 'Streaming', 'Microservices'] },
      { file: 'KAFKA - BATCHES CORRELATION IDS E DEAD LETTERS.pdf', tech: ['Kafka', 'Message Queue'] }
    ];

    aluraCertificates.forEach(cert => {
      certificates.push({
        id: autoId++,
        title: this.extractTitleFromFilename(cert.file),
        issuer: 'Alura',
        imageUrl: 'assets/icons/techs/alura-icon.png',
        credentialUrl: '#',
        pdfPath: `assets/certifications/certificados Alura/${cert.file}`,
        isPdf: true,
        issuedDate: new Date(2024, 0), // Janeiro de 2024 (mês é 0-indexed)
        type: 'course',
        technologies: cert.tech,
        autoGenerated: true,
        description: `Curso da plataforma Alura sobre ${cert.tech[0]}.`
      });
    });

    // Certificados NTT Data
    const nttDataCertificates = [
      { file: 'Introdução ao Git.pdf', tech: ['Git', 'Version Control'] },
      { file: 'Introdução a integração continua com Jenkins.pdf', tech: ['Jenkins', 'CI/CD', 'DevOps'] },
      { file: 'Introduction to DevOps.pdf', tech: ['DevOps', 'Automation'] },
      { file: 'GenAI Academy Yellow Belt Level 2 for Developers.pdf', tech: ['AI', 'GenAI', 'Development'] },
      { file: 'GenAI Academy - Yellow Belt P1.pdf', tech: ['AI', 'GenAI'] },
      { file: 'GenAI Academy - White Belt.pdf', tech: ['AI', 'GenAI'] }
    ];

    nttDataCertificates.forEach(cert => {
      certificates.push({
        id: autoId++,
        title: this.extractTitleFromFilename(cert.file),
        issuer: 'NTT Data',
        imageUrl: 'assets/icons/techs/company-icon.png',
        credentialUrl: '#',
        pdfPath: `assets/certifications/certificados empresa nttdata/${cert.file}`,
        isPdf: true,
        issuedDate: new Date(2024, 0),
        type: 'course',
        technologies: cert.tech,
        autoGenerated: true,
        description: `Curso corporativo NTT Data sobre ${cert.tech[0]}.`
      });
    });

    return certificates;
  }

  // Extrai título limpo do nome do arquivo
  private extractTitleFromFilename(filename: string): string {
    return filename
      .replace('.pdf', '')
      .replace(/[-_]/g, ' ')
      .trim();
  }

  // ========================================
  // MÉTODO PARA COMBINAR AUTOMÁTICOS + MANUAIS
  // ========================================
  private getAllCourseCertificates(): Certification[] {
    const autoCerts = this.getAutoGeneratedCertificates();
    const manualCerts = this.manualCertificates;

    // Combina: manuais sobrescrevem automáticos com mesmo arquivo PDF
    const mergedMap = new Map<string, Certification>();

    // Adiciona automáticos primeiro
    autoCerts.forEach(cert => {
      if (cert.pdfPath) {
        mergedMap.set(cert.pdfPath, cert);
      }
    });

    // Sobrescreve com manuais (se existir mesmo PDF)
    manualCerts.forEach(cert => {
      if (cert.pdfPath) {
        mergedMap.set(cert.pdfPath, cert);
      } else {
        // Se não tem PDF, adiciona direto
        mergedMap.set(`manual-${cert.id}`, cert);
      }
    });

    // Combina com certificados existentes (não-PDF)
    const existingCourses = this.certifications.filter(c => c.type === 'course' && !c.isPdf);

    return [...existingCourses, ...Array.from(mergedMap.values())];
  }

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

  // Valores/estatísticas da seção About
  getAboutValues(): Observable<AboutValue[]> {
    const values: AboutValue[] = [
      { number: '3+', label: 'Anos de Experiência' },
      { number: '15+', label: 'Projetos Concluídos' },
      { number: '8+', label: 'Tecnologias' },
      { number: '100%', label: 'Dedicação' }
    ];
    return of(values);
  }

  // Valores pessoais/profissionais
  getPersonalValues(): Observable<PersonalValue[]> {
    const values: PersonalValue[] = [
      {
        title: 'Excelência Técnica',
        description: 'Buscar a maestria em cada detalhe do meu trabalho, unindo conhecimento profundo, precisão na execução e aprimoramento constante para entregar soluções sólidas e de alto padrão.',
        icon: '🎯'
      },
      {
        title: 'Crescimento Contínuo',
        description: 'Buscar constantemente aperfeiçoar minhas habilidades técnicas, aplicando as melhores práticas e estudando novas tecnologias para entregar soluções de qualidade.',
        icon: '🚀'
      },
      {
        title: 'Impacto Positivo',
        description: 'Criar soluções que facilitem a vida das pessoas e gerem valor real para a sociedade.',
        icon: '🌟'
      },
      {
        title: 'Confiabilidade',
        description: 'Ser sincero, alegre e confiável, construindo relacionamentos duradouros e significativos.',
        icon: '🤝'
      }
    ];
    return of(values);
  }

  getTimelineData(): Observable<TimelineItem[]> {
    const timeline: TimelineItem[] = [
      {
        year: '2020',
        title: 'Início da Carreira',
        description: 'Apesar de já programar recreativamente desde os 12 anos de idade, considero que o ingresso na faculdade marcou o início de minha jornada como desenvolvedor profissional, focando em Java e desenvolvimento web.'
      },
      {
        year: '2021',
        title: 'Migração de Carreira',
        description: 'Ingressei em uma das maiores consultorias de tecnologia do mundo para realizar meu estágio.'
      },
      {
        year: '2021',
        title: 'Especialização em Java',
        description: 'Aprofundei conhecimentos no ecossistema Spring e desenvolvimento de APIs robustas.'
      },
      {
        year: '2022',
        title: 'Efetivação na Consultoria',
        description: 'Fui efetivado como desenvolvedor na consultoria, atuando em projetos desafiadores como desenvolvedor júnior.'
      },
      {
        year: '2022',
        title: 'Formação Acadêmica',
        description: 'Concluí o curso de Análise e Desenvolvimento de Sistemas na Faculdade ELO, em Recife.'
      },
      {
        year: '2023',
        title: 'Certificações AWS',
        description: 'Obtive certificações AWS e comecei a aplicar conhecimentos de cloud computing em projetos.'
      },
      {
        year: '2023',
        title: 'Promoção a desenvolvedor pleno',
        description: 'Fui promovido a desenvolvedor pleno na consultoria, assumindo mais responsabilidades e trabalhando em projetos com mais autonomia.'
      },
      {
        year: 'Hoje',
        title: 'Desenvolvedor Backend Pleno',
        description: 'Atualmente atuo como desenvolvedor backend pleno. Estou focado em desenvolver habilidades interpessoais, liderança, comunicação clara, colaboração em equipe e visão estratégica. Acredito que ser Sênior vai além do domínio técnico: envolve saber compartilhar conhecimento, tomar decisões responsáveis, apoiar o crescimento dos colegas e contribuir para um ambiente de trabalho saudável e produtivo. Meu objetivo é evoluir nessas competências para assumir novos desafios e gerar impacto positivo por onde passar.',
        isPresent: true
      }
    ];
    return of(timeline);
  }

  // Métodos para Certificações
  getCertifications(): Observable<Certification[]> {
    const allCertificates = [
      ...this.certifications.filter(c => c.type === 'aws'),
      ...this.getAllCourseCertificates()
    ];
    return of(allCertificates);
  }

  getFeaturedCertifications(): Observable<Certification[]> {
    return of(this.certifications.filter(c => c.type === 'aws' && c.featured));
  }

  getCourses(): Observable<Certification[]> {
    return of(this.getAllCourseCertificates());
  }

  getAvailableFilters(): Observable<CertificationFilter[]> {
    const platforms = [...new Set(this.certifications.map(c => c.issuer))];
    const technologies = [...new Set(this.certifications.flatMap(c => c.technologies || []))];

    const filters: CertificationFilter[] = [
      {
        name: 'Todas',
        key: 'all',
        icon: '📚'
      },
      ...platforms.map(platform => ({
        name: platform,
        key: platform.toLowerCase().replace(/\s+/g, '-'),
        icon: this.getPlatformIcon(platform)
      })),
      ...technologies.slice(0, 10).map(tech => ({
        name: tech,
        key: tech.toLowerCase(),
        icon: '🔧'
      }))
    ];

    return of(filters);
  }

  private getPlatformIcon(platform: string): string {
    const icons: { [key: string]: string } = {
      'Alura': '🎓',
      'Udemy': '📖',
      'Digital Innovation One': '💻',
      'Empresa': '🏢',
      'Amazon Web Services': '☁️'
    };
    return icons[platform] || '📄';
  }
}
