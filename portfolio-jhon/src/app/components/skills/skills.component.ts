import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation, scaleInAnimation } from '../../animations/portfolio.animations';
import { SkillCardComponent, SkillData } from '../../shared/skill-card/skill-card.component';
import { CategoryFiltersComponent, CategoryFilter } from '../../shared/category-filters/category-filters.component';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SkillCardComponent, CategoryFiltersComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [fadeInAnimation, scaleInAnimation]
})
export class SkillsComponent implements OnInit {

  skills: SkillData[] = [
    // Backend
    { name: 'Java', icon: 'assets/icons/techs/java.svg', category: 'backend', level: 'expert' },
    { name: 'Spring Boot', icon: '🍃', category: 'backend', level: 'expert' },
    { name: 'Node.js', icon: '🟢', category: 'backend', level: 'intermediate' },
    { name: 'Python', icon: 'assets/icons/techs/py.svg', category: 'backend', level: 'intermediate' },

    // Frontend
    { name: 'JavaScript', icon: 'assets/icons/techs/js.svg', category: 'frontend', level: 'advanced' },
    { name: 'TypeScript', icon: 'assets/icons/techs/ts.svg', category: 'frontend', level: 'advanced' },
    { name: 'Angular', icon: '🅰️', category: 'frontend', level: 'advanced' },
    { name: 'React', icon: 'assets/icons/techs/react.svg', category: 'frontend', level: 'intermediate' },
    { name: 'HTML5', icon: 'assets/icons/techs/html.svg', category: 'frontend', level: 'expert' },
    { name: 'CSS3', icon: 'assets/icons/techs/css.svg', category: 'frontend', level: 'advanced' },

    // Database
    { name: 'PostgreSQL', icon: '🐘', category: 'database', level: 'advanced' },
    { name: 'MySQL', icon: 'assets/icons/techs/mysql.svg', category: 'database', level: 'advanced' },
    { name: 'MongoDB', icon: '🍃', category: 'database', level: 'intermediate' },

    // Cloud & Tools
    { name: 'AWS', icon: '☁️', category: 'cloud', level: 'advanced' },
    { name: 'Docker', icon: '🐳', category: 'tools', level: 'advanced' },
    { name: 'Git', icon: 'assets/icons/techs/git.svg', category: 'tools', level: 'expert' },
    { name: 'GitHub', icon: 'assets/icons/techs/github.svg', category: 'tools', level: 'expert' },
    { name: 'Figma', icon: 'assets/icons/techs/figma.svg', category: 'tools', level: 'intermediate' },
    { name: 'IntelliJ IDEA', icon: '💡', category: 'tools', level: 'expert' },
    { name: 'VS Code', icon: '💻', category: 'tools', level: 'expert' },
    { name: 'Postman', icon: '📮', category: 'tools', level: 'advanced' },

    // Methodologies & Practices
    { name: 'Scrum', icon: '🏃‍♂️', category: 'methodologies', level: 'advanced' },
    { name: 'Kanban', icon: '📋', category: 'methodologies', level: 'advanced' },
    { name: 'TDD', icon: '🧪', category: 'methodologies', level: 'intermediate' },
    { name: 'Clean Architecture', icon: '🏗️', category: 'methodologies', level: 'advanced' },
    { name: 'SOLID Principles', icon: '🎯', category: 'methodologies', level: 'advanced' },
    { name: 'Design Patterns', icon: '🧩', category: 'methodologies', level: 'advanced' },
    { name: 'Code Review', icon: '👁️', category: 'methodologies', level: 'expert' },
    { name: 'CI/CD', icon: '🔄', category: 'methodologies', level: 'intermediate' }
  ];

  categories: CategoryFilter[] = [
    { name: 'Backend', key: 'backend', icon: '⚙️' },
    { name: 'Frontend', key: 'frontend', icon: '🎨' },
    { name: 'Database', key: 'database', icon: '🗄️' },
    { name: 'Cloud', key: 'cloud', icon: '☁️' },
    { name: 'Ferramentas', key: 'tools', icon: '🛠️' },
    { name: 'Metodologias', key: 'methodologies', icon: '📊' }
  ];

  selectedCategory: string = 'all';

  ngOnInit(): void {}

  filterSkills(): SkillData[] {
    if (this.selectedCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.selectedCategory);
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }


}
