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
        'Arquitetura componentizada para reuso',
        'Animações e transições suaves',
        'Sistema híbrido de certificados (auto-geração de PDFs + controle manual)',
        'Preview de PDFs renderizado em Canvas usando PDF.js',
        'Deploy automatizado via GitHub Actions para GitHub Pages'
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

    // Mapeamento de horas extraídas dos PDFs (Digital Innovation One)
    const pdfHours: { [key: string]: number } = {
      'Abstraindo um Bootcamp Usando Orientação a Objetos em Java.pdf': 2,
      'Aprenda a aplicar testes com Java.pdf': 2,
      'aprenda o que são estrutura de dados e algoritmos.pdf': 2,
      'Arquitetura de Sistemas Avançado.pdf': 3,
      'bootcamp become remote - Impulso.pdf': 17,
      'bootcamp everis new talents java.pdf': 70,
      'bootcamp GFT START  Java.pdf': 82,
      'bootcamp spread java developer.pdf': 97,
      'coleções.pdf': 1,
      'Conceitos e melhores práticas com bancos de dados PostgreSQL.pdf': 9,
      'construindo paginas para internet com bootstrap.pdf': 4,
      'Criando aplicações web com spring web MVC.pdf': 7,
      'Criando seu Primeiro Repositório github para compartilhar seu progresso.pdf': 1,
      'Criando um Banco Digital com Java e Orientação a Objetos.pdf': 2,
      'Debugging e Error Handling java script.pdf': 2,
      'Desenvolvendo um sistema de gerenciamento de pessoas em API REST.pdf': 6,
      'Desenvolvimento avançado em Java.pdf': 8,
      'Desenvolvimento básico em Java.pdf': 9,
      'Desenvolvimento de testes unitários para validar uma API REST de gerenciamento estoques de cerveja.pdf': 6,
      'dominando IDEs java.pdf': 4,
      'Estrutura de dados em Java.pdf': 10,
      'Estruturas de Repetição e Arrays em Java.pdf': 3,
      'Fundamentos de Arquitetura de Sistemas.pdf': 6,
      'Gerenciando Usuários no Linux.pdf': 2,
      'IDE Instalação e Configuração (Visual Studio Code).pdf': 2,
      'Implementando Collections e Streams com Java.pdf': 6,
      'Introdução a APIs e métodos HTTP.pdf': 2,
      'Introdução a criação de websites com HTML5 e CSS3.pdf': 6,
      'Introdução a orientação a objetos com Java.pdf': 2,
      'Introdução a Qualidade de Software.pdf': 2,
      'Introdução ao Desenvolvimento Moderno de Software(897D2912).pdf': 2,
      'Introdução ao framework Spring Boot.pdf': 2,
      'Introdução ao Git e Controle de Versões.pdf': 2,
      'introdução ao git e github.pdf': 5,
      'Introdução ao GitHub e comandos para trabalhar em equipe.pdf': 4,
      'Introdução aos Conceitos de API e Clean Architecture.pdf': 4,
      'Introdução prática a computação em nuvem usando AWS.pdf': 2,
      'Javascript Assíncrono.pdf': 1,
      'Linux  A introdução ao sistema operacional.pdf': 10,
      'logica de programação essencial.pdf': 4,
      'Lógica Condicional e Controle de Fluxos em Java.pdf': 1,
      'Manipulando Arquivos no Linux.pdf': 3,
      'Primeiros passos para desenvolvimento web.pdf': 6,
      'Programação Orientada a.pdf': 4,
      'Programação para internet com JavaScript.pdf': 2,
      'Projetos ágeis com SCRUM (2).pdf': 2,
      'Projetos ágeis com SCRUM.pdf': 2,
      'Recriando a página inicial do Instagram.pdf': 2,
      'Reforçando o Conceito de Laços em Java.pdf': 1,
      'Shell script - Manipulando Arquivos.pdf': 2,
      'SQL SERVER - Criando suas primeiras consultas.pdf': 4,
      'Trabalhando com Collections Java.pdf': 6,
      'Variáveis, Tipos de Dados e Operadores Matemáticos em Java.pdf': 2
    };

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

    // Certificados Digital Innovation One
    const digitalInnovationOneCertificates = [
      // Java & OOP
      { file: 'Abstraindo um Bootcamp Usando Orientação a Objetos em Java.pdf', tech: ['Java', 'OOP'] },
      { file: 'Aprenda a aplicar testes com Java.pdf', tech: ['Java', 'Testing', 'JUnit'] },
      { file: 'Criando um Banco Digital com Java e Orientação a Objetos.pdf', tech: ['Java', 'OOP'] },
      { file: 'Desenvolvimento avançado em Java.pdf', tech: ['Java', 'Advanced'] },
      { file: 'Desenvolvimento básico em Java.pdf', tech: ['Java', 'Fundamentals'] },
      { file: 'dominando IDEs java.pdf', tech: ['Java', 'IDE', 'Tools'] },
      { file: 'Estrutura de dados em Java.pdf', tech: ['Java', 'Data Structures'] },
      { file: 'Estruturas de Repetição e Arrays em Java.pdf', tech: ['Java', 'Arrays'] },
      { file: 'Implementando Collections e Streams com Java.pdf', tech: ['Java', 'Collections', 'Streams'] },
      { file: 'Introdução a orientação a objetos com Java.pdf', tech: ['Java', 'OOP'] },
      { file: 'Lógica Condicional e Controle de Fluxos em Java.pdf', tech: ['Java', 'Logic'] },
      { file: 'Programação Orientada a.pdf', tech: ['OOP', 'Programming'] },
      { file: 'Reforçando o Conceito de Laços em Java.pdf', tech: ['Java', 'Loops'] },
      { file: 'Trabalhando com Collections Java.pdf', tech: ['Java', 'Collections'] },
      { file: 'Variáveis, Tipos de Dados e Operadores Matemáticos em java.pdf', tech: ['Java', 'Fundamentals'] },
      { file: 'coleções.pdf', tech: ['Java', 'Collections'] },

      // Spring Framework
      { file: 'Criando aplicações web com spring web MVC.pdf', tech: ['Java', 'Spring', 'MVC'] },
      { file: 'Desenvolvendo um sistema de gerenciamento de pessoas em API REST.pdf', tech: ['Java', 'Spring', 'REST API'] },
      { file: 'Desenvolvimento de testes unitários para validar uma API REST de gerenciamento estoques de cerveja.pdf', tech: ['Java', 'Spring', 'Testing', 'REST API'] },
      { file: 'Introdução ao framework Spring Boot.pdf', tech: ['Java', 'Spring Boot'] },

      // Databases
      { file: 'Conceitos e melhores práticas com bancos de dados PostgreSQL.pdf', tech: ['PostgreSQL', 'Database'] },
      { file: 'SQL SERVER - Criando suas primeiras consultas.pdf', tech: ['SQL Server', 'Database', 'SQL'] },

      // Web Development
      { file: 'construindo paginas para internet com bootstrap.pdf', tech: ['Bootstrap', 'HTML', 'CSS', 'Frontend'] },
      { file: 'Introdução a criação de websites com HTML5 e CSS3.pdf', tech: ['HTML5', 'CSS3', 'Frontend'] },
      { file: 'Primeiros passos para desenvolvimento web.pdf', tech: ['Web Development', 'Frontend'] },
      { file: 'Recriando a página inicial do Instagram.pdf', tech: ['HTML', 'CSS', 'Frontend'] },

      // JavaScript
      { file: 'Debugging e Error Handling java script.pdf', tech: ['JavaScript', 'Debugging'] },
      { file: 'Javascript Assíncrono.pdf', tech: ['JavaScript', 'Async'] },
      { file: 'Programação para internet com JavaScript.pdf', tech: ['JavaScript', 'Web'] },

      // Git & GitHub
      { file: 'Criando seu Primeiro Repositório github para compartilhar seu progresso.pdf', tech: ['Git', 'GitHub'] },
      { file: 'Introdução ao Git e Controle de Versões.pdf', tech: ['Git', 'Version Control'] },
      { file: 'introdução ao git e github.pdf', tech: ['Git', 'GitHub'] },
      { file: 'Introdução ao GitHub e comandos para trabalhar em equipe.pdf', tech: ['Git', 'GitHub', 'Collaboration'] },

      // Architecture & Software Engineering
      { file: 'Arquitetura de Sistemas Avançado.pdf', tech: ['Architecture', 'Software Engineering'] },
      { file: 'Fundamentos de Arquitetura de Sistemas.pdf', tech: ['Architecture', 'Fundamentals'] },
      { file: 'Introdução aos Conceitos de API e Clean Architecture.pdf', tech: ['API', 'Clean Architecture'] },
      { file: 'Introdução a APIs e métodos HTTP.pdf', tech: ['API', 'HTTP', 'REST'] },
      { file: 'Introdução ao Desenvolvimento Moderno de Software(897D2912).pdf', tech: ['Software Development', 'Modern Practices'] },
      { file: 'Introdução a Qualidade de Software.pdf', tech: ['Quality Assurance', 'Testing'] },

      // Cloud & AWS
      { file: 'Introdução prática a computação em nuvem usando AWS.pdf', tech: ['AWS', 'Cloud Computing'] },

      // Linux & DevOps
      { file: 'Gerenciando Usuários no Linux.pdf', tech: ['Linux', 'System Administration'] },
      { file: 'Linux  A introdução ao sistema operacional.pdf', tech: ['Linux', 'Operating Systems'] },
      { file: 'Manipulando Arquivos no Linux.pdf', tech: ['Linux', 'Shell'] },
      { file: 'Shell script - Manipulando Arquivos.pdf', tech: ['Shell Script', 'Linux'] },

      // Tools & IDE
      { file: 'IDE Instalação e Configuração (Visual Studio Code).pdf', tech: ['VS Code', 'IDE', 'Tools'] },

      // Algorithms & Data Structures
      { file: 'aprenda o que são estrutura de dados e algoritmos.pdf', tech: ['Data Structures', 'Algorithms'] },
      { file: 'logica de programação essencial.pdf', tech: ['Programming Logic', 'Fundamentals'] },

      // Agile & Scrum
      { file: 'Projetos ágeis com SCRUM (2).pdf', tech: ['Scrum', 'Agile'] },
      { file: 'Projetos ágeis com SCRUM.pdf', tech: ['Scrum', 'Agile'] },

      // Bootcamps
      { file: 'bootcamp become remote - Impulso.pdf', tech: ['Bootcamp', 'Remote Work'] },
      { file: 'bootcamp everis new talents java.pdf', tech: ['Bootcamp', 'Java'] },
      { file: 'bootcamp GFT START  Java.pdf', tech: ['Bootcamp', 'Java'] },
      { file: 'bootcamp spread java developer.pdf', tech: ['Bootcamp', 'Java'] }
    ];

    digitalInnovationOneCertificates.forEach(cert => {
      certificates.push({
        id: autoId++,
        title: this.extractTitleFromFilename(cert.file),
        issuer: 'Digital Innovation One',
        imageUrl: 'assets/icons/techs/digital-innovation-one-icon.png',
        credentialUrl: '#',
        pdfPath: `assets/certifications/certificados Digital Innovation One/${cert.file}`,
        isPdf: true,
        issuedDate: new Date(2024, 0), // Janeiro de 2024 (mês é 0-indexed)
        type: 'course',
        technologies: cert.tech,
        hours: pdfHours[cert.file] || undefined, // Usa horas reais do PDF se disponível
        autoGenerated: true,
        description: `Curso da plataforma Digital Innovation One sobre ${cert.tech[0]}.`
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
