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
      description: 'Portfolio pessoal desenvolvido com Angular 19+, utilizando standalone components e design responsivo. Apresenta projetos, habilidades técnicas e informações profissionais de forma interativa e moderna.',
      shortDescription: 'Portfolio responsivo desenvolvido com Angular 19+ e componentes standalone.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5', 'CSS Grid', 'GitHub Pages'],
      githubUrl: 'https://github.com/JhonCodari/portfolio',
      liveUrl: 'https://jhoncodari.github.io/portfolio/',
      imageUrl: 'assets/images/projetos/portfolio.png',
      featured: true,
      category: 'frontend',
      status: 'in-progress',// as opções são 'completed', 'in-progress', 'planned'
      completedAt: new Date('2025-09-24'),
      highlights: [
        'Arquitetura componentizada para reuso',
        'Animações e transições suaves',
        'Sistema híbrido de certificados (auto-geração + controle manual)',
        'Thumbnails estáticos de certificados com lazy loading',
        'Deploy automatizado via GitHub Actions para GitHub Pages'
      ]
    }
  ];

  private skills: Skill[] = [
    // Backend & Core
    { name: 'Java', level: 85, category: 'backend' },
    { name: 'Spring Framework', level: 80, category: 'backend' },
    { name: 'Spring Boot', level: 80, category: 'backend' },
    { name: 'Spring Security', level: 55, category: 'backend' },
    { name: 'Spring Data JPA', level: 55, category: 'backend' },

    // Cloud & DevOps
    { name: 'AWS', level: 65, category: 'tools' },
    { name: 'Docker', level: 50, category: 'tools' },
    { name: 'Kubernetes', level: 25, category: 'tools' },

    // Databases
    { name: 'MySQL', level: 45, category: 'database' },
    { name: 'PostgreSQL', level: 45, category: 'database' },
    { name: 'Redis', level: 20, category: 'database' },

    // Messaging & Integration
    { name: 'Apache Kafka', level: 50, category: 'tools' },
    { name: 'REST APIs', level: 75, category: 'backend' },

    // Version Control & Tools
    { name: 'Git/GitHub', level: 70, category: 'tools' },
    { name: 'GitLab', level: 70, category: 'tools' },

    // Frontend (Secondary skills)
    { name: 'Angular', level: 25, category: 'frontend' },
    { name: 'TypeScript', level: 25, category: 'frontend' },
    { name: 'JavaScript', level: 25, category: 'frontend' }
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
      // imageUrl: 'assets/certifications/AWS Certified Cloud Practitioner certificate.png',
      imageUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
      credentialUrl: 'https://www.credly.com/badges/c355e02b-1a6b-4e29-894c-3c8183fa0299/public_url',
      issuedDate: new Date('2023-07-06'),
      expiryDate: new Date('2026-07-06'),
      type: 'aws',
      technologies: ['AWS', 'Cloud Computing', 'Amazon Web Services', 'Fundamentos de Nuvem', 'Serviços AWS'],
      featured: true,
      description: 'O AWS Certified Cloud Practitioner valida a compreensão básica e de alto nível dos serviços, da terminologia e da Nuvem AWS.'
    },
  ];

  // ========================================
  // CERTIFICADOS MANUAIS (Sobrescrevem os automáticos)
  // ========================================
  // Adicione aqui certificados com informações personalizadas
  // Se houver um PDF com nome similar, as informações manuais terão prioridade
  private manualCertificates: Certification[] = [

    // Exemplo de certificado manual customizado:
    {
      id: 1000,
      title: 'Java e Spring - WebFlux',
      issuer: 'Alura',
      imageUrl: 'assets/certifications/certificados Alura/Java e Spring - construindo aplicações reativas com WebFlux.png',
      credentialUrl: 'https://cursos.alura.com.br/certificate/xxxxx',
      pdfPath: 'assets/certifications/certificados Alura/Java e Spring - construindo aplicações reativas com WebFlux.pdf',
      isPdf: true,
      issuedDate: new Date('2024-11-15'),
      type: 'course',
      technologies: ['Java', 'Spring', 'WebFlux', 'Reactive'],
      hours: 12,
      instructor: 'Instrutor Alura',
      description: 'Curso completo sobre programação reativa com Spring WebFlux.',
      featured: true
    }


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

  private getAutoGeneratedCertificates(): Certification[] {
    const certificates: Certification[] = [];
    let autoId = 2000;

    // Certificados Alura
    const aluraCertificates = [
      { file: 'Java e Spring - Realizando processamento em lote com Spring Batch.pdf', tech: ['Java', 'Spring', 'Spring Batch'], hours: 8 },
      { file: 'Java e Spring - construindo aplicações reativas com WebFlux.pdf', tech: ['Java', 'Spring', 'WebFlux', 'Reactive'], hours: 10 },
      { file: 'TypeScript na prática implemente um projeto completo com TypeScript e módulos.pdf', tech: ['TypeScript', 'JavaScript'], hours: 12 },
      { file: 'TypeScript -  aplicando orientação a objetos no Front-end.pdf', tech: ['TypeScript', 'OOP'], hours: 6 },
      { file: 'Kafka produtores, consumidores e streams.pdf', tech: ['Kafka', 'Streaming', 'Microservices'], hours: 8 },
      { file: 'KAFKA - BATCHES CORRELATION IDS E DEAD LETTERS.pdf', tech: ['Kafka', 'Message Queue'], hours: 8 }
    ];

    aluraCertificates.forEach(cert => {
      certificates.push({
        id: autoId++,
        title: this.extractTitleFromFilename(cert.file),
        issuer: 'Alura',
        imageUrl: this.getImagePathFromPdf(cert.file, 'certificados Alura'),
        credentialUrl: '#',
        pdfPath: `assets/certifications/certificados Alura/${cert.file}`,
        isPdf: true,
        issuedDate: new Date(2024, 0),
        type: 'course',
        technologies: cert.tech,
        hours: cert.hours,
        autoGenerated: true,
        description: `Curso da plataforma Alura sobre ${cert.tech[0]}.`
      });
    });

    // Certificados Digital Innovation One
    const digitalInnovationOneCertificates = [
      // Java & OOP
      { file: 'Abstraindo um Bootcamp Usando Orientação a Objetos em Java.pdf', tech: ['Java', 'OOP'], hours: 2 },
      { file: 'Aprenda a aplicar testes com Java.pdf', tech: ['Java', 'Testing', 'JUnit'], hours: 2 },
      { file: 'Criando um Banco Digital com Java e Orientação a Objetos.pdf', tech: ['Java', 'OOP'], hours: 2 },
      { file: 'Desenvolvimento avançado em Java.pdf', tech: ['Java', 'Advanced'], hours: 8 },
      { file: 'Desenvolvimento básico em Java.pdf', tech: ['Java', 'Fundamentals'], hours: 9 },
      { file: 'dominando IDEs java.pdf', tech: ['Java', 'IDE', 'Tools'], hours: 4 },
      { file: 'Estrutura de dados em Java.pdf', tech: ['Java', 'Data Structures'], hours: 10 },
      { file: 'Estruturas de Repetição e Arrays em Java.pdf', tech: ['Java', 'Arrays'], hours: 3 },
      { file: 'Implementando Collections e Streams com Java.pdf', tech: ['Java', 'Collections', 'Streams'], hours: 6 },
      { file: 'Introdução a orientação a objetos com Java.pdf', tech: ['Java', 'OOP'], hours: 2 },
      { file: 'Lógica Condicional e Controle de Fluxos em Java.pdf', tech: ['Java', 'Logic'], hours: 1 },
      { file: 'Programação Orientada a.pdf', tech: ['OOP', 'Programming'], hours: 4 },
      { file: 'Reforçando o Conceito de Laços em Java.pdf', tech: ['Java', 'Loops'], hours: 1 },
      { file: 'Trabalhando com Collections Java.pdf', tech: ['Java', 'Collections'], hours: 6 },
      { file: 'Variáveis, Tipos de Dados e Operadores Matemáticos em Java.pdf', tech: ['Java', 'Fundamentals'], hours: 2 },
      { file: 'coleções.pdf', tech: ['Java', 'Collections'], hours: 1 },

      // Spring Framework
      { file: 'Criando aplicações web com spring web MVC.pdf', tech: ['Java', 'Spring', 'MVC'], hours: 7 },
      { file: 'Desenvolvendo um sistema de gerenciamento de pessoas em API REST.pdf', tech: ['Java', 'Spring', 'REST API'], hours: 6 },
      { file: 'Desenvolvimento de testes unitários para validar uma API REST de gerenciamento estoques de cerveja.pdf', tech: ['Java', 'Spring', 'Testing', 'REST API'], hours: 6 },
      { file: 'Introdução ao framework Spring Boot.pdf', tech: ['Java', 'Spring Boot'], hours: 2 },

      // Databases
      { file: 'Conceitos e melhores práticas com bancos de dados PostgreSQL.pdf', tech: ['PostgreSQL', 'Database'], hours: 9 },
      { file: 'SQL SERVER - Criando suas primeiras consultas.pdf', tech: ['SQL Server', 'Database', 'SQL'], hours: 4 },

      // Web Development
      { file: 'construindo paginas para internet com bootstrap.pdf', tech: ['Bootstrap', 'HTML', 'CSS'], hours: 4 },
      { file: 'Introdução a criação de websites com HTML5 e CSS3.pdf', tech: ['HTML5', 'CSS3'], hours: 6 },
      { file: 'Primeiros passos para desenvolvimento web.pdf', tech: ['Web Development'], hours: 6 },
      { file: 'Recriando a página inicial do Instagram.pdf', tech: ['HTML', 'CSS'], hours: 2 },

      // JavaScript
      { file: 'Debugging e Error Handling java script.pdf', tech: ['JavaScript', 'Debugging'], hours: 2 },
      { file: 'Javascript Assíncrono.pdf', tech: ['JavaScript', 'Async'], hours: 1 },
      { file: 'Programação para internet com JavaScript.pdf', tech: ['JavaScript', 'Web'], hours: 2 },

      // Git & GitHub
      { file: 'Criando seu Primeiro Repositório github para compartilhar seu progresso.pdf', tech: ['Git', 'GitHub'], hours: 1 },
      { file: 'Introdução ao Git e Controle de Versões.pdf', tech: ['Git', 'Version Control'], hours: 2 },
      { file: 'introdução ao git e github.pdf', tech: ['Git', 'GitHub'], hours: 5 },
      { file: 'Introdução ao GitHub e comandos para trabalhar em equipe.pdf', tech: ['Git', 'GitHub', 'Collaboration'], hours: 4 },

      // Architecture & Software Engineering
      { file: 'Arquitetura de Sistemas Avançado.pdf', tech: ['Architecture', 'Software Engineering'], hours: 3 },
      { file: 'Fundamentos de Arquitetura de Sistemas.pdf', tech: ['Architecture', 'Fundamentals'], hours: 6 },
      { file: 'Introdução aos Conceitos de API e Clean Architecture.pdf', tech: ['API', 'Clean Architecture'], hours: 4 },
      { file: 'Introdução a APIs e métodos HTTP.pdf', tech: ['API', 'HTTP', 'REST'], hours: 2 },
      { file: 'Introdução ao Desenvolvimento Moderno de Software(897D2912).pdf', tech: ['Software Development', 'Modern Practices'], hours: 2 },
      { file: 'Introdução a Qualidade de Software.pdf', tech: ['Quality Assurance', 'Testing'], hours: 2 },

      // Cloud & AWS
      { file: 'Introdução prática a computação em nuvem usando AWS.pdf', tech: ['AWS', 'Cloud Computing'], hours: 2 },

      // Linux & DevOps
      { file: 'Gerenciando Usuários no Linux.pdf', tech: ['Linux', 'System Administration'], hours: 2 },
      { file: 'Linux  A introdução ao sistema operacional.pdf', tech: ['Linux', 'Operating Systems'], hours: 10 },
      { file: 'Manipulando Arquivos no Linux.pdf', tech: ['Linux', 'Shell'], hours: 3 },
      { file: 'Shell script - Manipulando Arquivos.pdf', tech: ['Shell Script', 'Linux'], hours: 2 },

      // Tools & IDE
      { file: 'IDE Instalação e Configuração (Visual Studio Code).pdf', tech: ['VS Code', 'IDE', 'Tools'], hours: 2 },

      // Algorithms & Data Structures
      { file: 'aprenda o que são estrutura de dados e algoritmos.pdf', tech: ['Data Structures', 'Algorithms'], hours: 2 },
      { file: 'logica de programação essencial.pdf', tech: ['Programming Logic', 'Fundamentals'], hours: 4 },

      // Agile & Scrum
      { file: 'Projetos ágeis com SCRUM (2).pdf', tech: ['Scrum', 'Agile'], hours: 2 },
      { file: 'Projetos ágeis com SCRUM.pdf', tech: ['Scrum', 'Agile'], hours: 2 },

      // Bootcamps
      { file: 'bootcamp become remote - Impulso.pdf', tech: ['Bootcamp', 'Remote Work'], hours: 17 },
      { file: 'bootcamp everis new talents java.pdf', tech: ['Bootcamp', 'Java'], hours: 70 },
      { file: 'bootcamp GFT START  Java.pdf', tech: ['Bootcamp', 'Java'], hours: 82 },
      { file: 'bootcamp spread java developer.pdf', tech: ['Bootcamp', 'Java'], hours: 97 }
    ];

    digitalInnovationOneCertificates.forEach(cert => {
      certificates.push({
        id: autoId++,
        title: this.extractTitleFromFilename(cert.file),
        issuer: 'Digital Innovation One',
        imageUrl: this.getImagePathFromPdf(cert.file, 'certificados Digital Innovation One'),
        credentialUrl: '#',
        pdfPath: `assets/certifications/certificados Digital Innovation One/${cert.file}`,
        isPdf: true,
        issuedDate: new Date(2024, 0),
        type: 'course',
        technologies: cert.tech,
        hours: cert.hours,
        autoGenerated: true,
        description: `Curso da plataforma Digital Innovation One sobre ${cert.tech[0]}.`
      });
    });

    // Certificados NTT Data
    const nttDataCertificates = [
      { file: 'Introdução ao Git.pdf', tech: ['Git', 'Version Control'], hours: 4 },
      { file: 'Introdução a integração continua com Jenkins.pdf', tech: ['Jenkins', 'CI/CD', 'DevOps'], hours: 6 },
      { file: 'Introduction to DevOps.pdf', tech: ['DevOps', 'Automation'], hours: 8 },
      { file: 'GenAI Academy Yellow Belt Level 2 for Developers.pdf', tech: ['AI', 'GenAI', 'Development'], hours: 12 },
      { file: 'GenAI Academy - Yellow Belt P1.pdf', tech: ['AI', 'GenAI'], hours: 10 },
      { file: 'GenAI Academy - White Belt.pdf', tech: ['AI', 'GenAI'], hours: 6 }
    ];

    nttDataCertificates.forEach(cert => {
      certificates.push({
        id: autoId++,
        title: this.extractTitleFromFilename(cert.file),
        issuer: 'NTT Data',
        imageUrl: this.getImagePathFromPdf(cert.file, 'certificados empresa nttdata'),
        credentialUrl: '#',
        pdfPath: `assets/certifications/certificados empresa nttdata/${cert.file}`,
        isPdf: true,
        issuedDate: new Date(2024, 0),
        type: 'course',
        technologies: cert.tech,
        hours: cert.hours,
        autoGenerated: true,
        description: `Curso corporativo NTT Data sobre ${cert.tech[0]}.`
      });
    });

    // Certificados Udemy
    const udemyCertificates = [
      { file: 'Modelo de arquitetura C4 Model.pdf', tech: ['Architecture', 'C4 Model', 'Software Design'], hours: 1 },
      { file: 'preparatorio para certificação Developer Associate.pdf', tech: ['AWS', 'Cloud', 'Developer Associate'], hours: 17 }
    ];

    udemyCertificates.forEach(cert => {
      certificates.push({
        id: autoId++,
        title: this.extractTitleFromFilename(cert.file),
        issuer: 'Udemy',
        imageUrl: this.getImagePathFromPdf(cert.file, 'certificados Udemy'),
        credentialUrl: '#',
        pdfPath: `assets/certifications/certificados Udemy/${cert.file}`,
        isPdf: true,
        issuedDate: new Date(2024, 0),
        type: 'course',
        technologies: cert.tech,
        hours: cert.hours,
        autoGenerated: true,
        description: `Curso da plataforma Udemy sobre ${cert.tech[0]}.`
      });
    });

    return certificates;
  }

  private extractTitleFromFilename(filename: string): string {
    return filename
      .replace('.pdf', '')
      .replace(/[-_]/g, ' ')
      .trim();
  }

  private getImagePathFromPdf(pdfFilename: string, pdfFolder: string): string {
    const imageFilename = pdfFilename.replace('.pdf', '.png');
    return `assets/certifications/${pdfFolder}/${imageFilename}`;
  }

  private getAllCourseCertificates(): Certification[] {
    const autoCerts = this.getAutoGeneratedCertificates();
    const manualCerts = this.manualCertificates;

    const mergedMap = new Map<string, Certification>();

    autoCerts.forEach(cert => {
      if (cert.pdfPath) {
        mergedMap.set(cert.pdfPath, cert);
      }
    });

    manualCerts.forEach(cert => {
      if (cert.pdfPath) {
        mergedMap.set(cert.pdfPath, cert);
      } else {
        mergedMap.set(`manual-${cert.id}`, cert);
      }
    });

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

  getAboutValues(): Observable<AboutValue[]> {
    const values: AboutValue[] = [
      { number: '3+', label: 'Anos de Experiência' },
      { number: '15+', label: 'Projetos Concluídos' },
      { number: '8+', label: 'Tecnologias' },
      { number: '100%', label: 'Dedicação' }
    ];
    return of(values);
  }

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
        description: 'Obtive minha primeira certificação AWS, apesar de já aplicar conhecimentos de cloud computing em projetos.'
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
