import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';

export interface SkillData {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud' | 'methodologies';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

@Component({
  selector: 'app-skill-card',
  imports: [CommonModule, SkillIconComponent],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() skill!: SkillData;
  @Input() animationDelay: number = 0;

  getLevelColor(level: string): string {
    switch (level) {
      case 'beginner': return '#fbbf24';
      case 'intermediate': return '#60a5fa';
      case 'advanced': return '#34d399';
      case 'expert': return '#a78bfa';
      default: return '#6b7280';
    }
  }

  getLevelText(level: string): string {
    const translations = {
      'beginner': 'Iniciante',
      'intermediate': 'Intermediário',
      'advanced': 'Avançado',
      'expert': 'Expert'
    };
    return translations[level as keyof typeof translations] || level;
  }

  getLevelPercentage(level: string): number {
    switch (level) {
      case 'beginner': return 25;
      case 'intermediate': return 50;
      case 'advanced': return 75;
      case 'expert': return 100;
      default: return 0;
    }
  }
}
