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
    { name: 'Java', icon: 'assets/icons/techs/java.svg', category: 'backend', level: 'advanced' },
    { name: 'Spring Boot', icon: 'assets/icons/techs/spring.svg', category: 'backend', level: 'advanced' },
    { name: 'Maven', icon: 'assets/icons/techs/maven.svg', category: 'backend', level: 'advanced' },
    { name: 'JUnit 5', icon: 'assets/icons/techs/junit.svg', category: 'backend', level: 'advanced' },

    // Frontend
    { name: 'JavaScript', icon: 'assets/icons/techs/javascript.svg', category: 'frontend', level: 'intermediate' },
    { name: 'TypeScript', icon: 'assets/icons/techs/typescript.svg', category: 'frontend', level: 'beginner' },
    { name: 'Angular', icon: 'assets/icons/techs/angular.svg', category: 'frontend', level: 'intermediate' },
    { name: 'React', icon: 'assets/icons/techs/gradient/react.svg', category: 'frontend', level: 'beginner' },
    { name: 'HTML5', icon: 'assets/icons/techs/html.svg', category: 'frontend', level: 'advanced' },
    { name: 'CSS3', icon: 'assets/icons/techs/css.svg', category: 'frontend', level: 'advanced' },

    // Database
    { name: 'PostgreSQL', icon: 'assets/icons/techs/postgresql.svg', category: 'database', level: 'advanced' },
    { name: 'MySQL', icon: 'assets/icons/techs/mysql.svg', category: 'database', level: 'advanced' },
    { name: 'Redis', icon: 'assets/icons/techs/redis.svg', category: 'database', level: 'beginner' },

    // Cloud & Tools
    { name: 'AWS', icon: 'assets/icons/techs/aws.svg', category: 'cloud', level: 'advanced' },
    { name: 'Docker', icon: 'assets/icons/techs/docker.svg', category: 'tools', level: 'advanced' },
    { name: 'Git', icon: 'assets/icons/techs/git.svg', category: 'tools', level: 'advanced' },
    { name: 'GitHub', icon: 'assets/icons/techs/github.svg', category: 'tools', level: 'advanced' },
    { name: 'Figma', icon: 'assets/icons/techs/figma.svg', category: 'tools', level: 'advanced' },
    { name: 'IntelliJ IDEA', icon: 'assets/icons/techs/intellij.svg', category: 'tools', level: 'advanced' },
    { name: 'Eclipse IDE', icon: 'assets/icons/techs/eclipse.svg', category: 'tools', level: 'advanced' },
    { name: 'VS Code', icon: 'assets/icons/techs/vscode.svg', category: 'tools', level: 'advanced' },
    { name: 'Postman', icon: 'assets/icons/techs/postman.svg', category: 'tools', level: 'advanced' },
    { name: 'Insomnia', icon: 'assets/icons/techs/insomnia.svg', category: 'tools', level: 'advanced' },
    { name: 'Linux', icon: 'assets/icons/techs/linux.svg', category: 'tools', level: 'intermediate' },

    // Methodologies & Practices
    { name: 'Scrum', icon: 'assets/icons/techs/agile.svg', category: 'methodologies', level: 'advanced' },
    { name: 'Kanban', icon: 'assets/icons/techs/kanban.svg', category: 'methodologies', level: 'advanced' },
    { name: 'TDD', icon: 'assets/icons/techs/test.svg', category: 'methodologies', level: 'intermediate' },
    { name: 'SOLID Principles', icon: 'assets/icons/techs/solid.svg', category: 'methodologies', level: 'intermediate' },
    { name: 'Design Patterns', icon: 'assets/icons/techs/pattern.svg', category: 'methodologies', level: 'intermediate' },
    { name: 'Code Review', icon: 'assets/icons/techs/review.svg', category: 'methodologies', level: 'advanced' },
    { name: 'CI/CD', icon: 'assets/icons/techs/ci-cd.svg', category: 'methodologies', level: 'intermediate' }
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
