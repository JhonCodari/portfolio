import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() animationDelay: number = 0;

  getStatusText(status: string): string {
    const translations = {
      'completed': 'Concluído',
      'in-progress': 'Em Desenvolvimento',
      'planned': 'Planejado'
    };
    return translations[status as keyof typeof translations] || status;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'completed': return '#34d399';
      case 'in-progress': return '#60a5fa';
      case 'planned': return '#fbbf24';
      default: return '#6b7280';
    }
  }

  getCategoryIcon(category: string): string {
    const icons = {
      'frontend': '🎨',
      'backend': '⚙️',
      'fullstack': '🚀',
      'mobile': '📱',
      'desktop': '🖥️',
      'web': '🌐'
    };
    return icons[category as keyof typeof icons] || '💻';
  }

  getCategoryText(category: string): string {
    const translations = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'fullstack': 'Full Stack',
      'mobile': 'Mobile',
      'desktop': 'Desktop',
      'web': 'Web'
    };
    return translations[category as keyof typeof translations] || category;
  }

  trackByTech(index: number, tech: string): string {
    return tech;
  }

  trackByHighlight(index: number, highlight: string): string {
    return highlight;
  }
}
