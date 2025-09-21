import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-icon',
  imports: [CommonModule],
  templateUrl: './skill-icon.component.html',
  styleUrl: './skill-icon.component.scss'
})
export class SkillIconComponent {
  @Input() skillName: string = '';
  @Input() fallbackIcon: string = '🔧';

  // Mapeamento de ícones SVG para cada tecnologia
  iconMapping: { [key: string]: string } = {
    // Backend
    'Java': 'assets/icons/java.svg',
    'Spring Boot': 'assets/icons/spring.svg',
    'Node.js': 'assets/icons/nodejs.svg',
    'Python': 'assets/icons/python.svg',

    // Frontend
    'JavaScript': 'assets/icons/javascript.svg',
    'TypeScript': 'assets/icons/typescript.svg',
    'Angular': 'assets/icons/angular.svg',
    'React': 'assets/icons/react.svg',
    'HTML5': 'assets/icons/html5.svg',
    'CSS3': 'assets/icons/css3.svg',

    // Database
    'PostgreSQL': 'assets/icons/postgresql.svg',
    'MySQL': 'assets/icons/mysql.svg',
    'MongoDB': 'assets/icons/mongodb.svg',

    // Cloud & Tools
    'AWS': 'assets/icons/aws.svg',
    'Docker': 'assets/icons/docker.svg',
    'Git': 'assets/icons/git.svg',
    'GitHub': 'assets/icons/github.svg',
    'Figma': 'assets/icons/figma.svg',
    'IntelliJ IDEA': 'assets/icons/intellij.svg',
    'VS Code': 'assets/icons/vscode.svg',
    'Postman': 'assets/icons/postman.svg'
  };

  get iconPath(): string | null {
    return this.iconMapping[this.skillName] || null;
  }

  get hasCustomIcon(): boolean {
    return !!this.iconPath;
  }

  onImageError(event: any): void {
    // Se a imagem falhar ao carregar, esconde o elemento
    event.target.style.display = 'none';
  }
}
