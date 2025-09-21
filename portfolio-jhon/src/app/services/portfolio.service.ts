import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, Skill, ContactInfo } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  private projects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Gestão Empresarial',
      description: 'Sistema completo para gestão de pequenas e médias empresas, incluindo controle financeiro, estoque e vendas.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'TypeScript'],
      githubUrl: 'https://github.com/jhoncodari/projeto-exemplo',
      featured: true,
      completedAt: new Date('2024-08-15')
    },
    {
      id: 2,
      title: 'App Mobile de Delivery',
      description: 'Aplicativo móvel para delivery de comida com sistema de pagamentos integrado.',
      technologies: ['React Native', 'Firebase', 'Stripe', 'JavaScript'],
      featured: true,
      completedAt: new Date('2024-06-20')
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
}
