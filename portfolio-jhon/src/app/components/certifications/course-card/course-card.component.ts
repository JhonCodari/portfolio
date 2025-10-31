import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certification } from '../../../interfaces/certification.interface';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() certification!: Certification;

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short'
    });
  }

  getPlatformIcon(): string {
    const icons: { [key: string]: string } = {
      'Alura': 'fas fa-graduation-cap',
      'Udemy': 'fas fa-chalkboard-teacher',
      'Digital Innovation One': 'fas fa-laptop-code',
      'Empresa': 'fas fa-building',
      'Amazon Web Services': 'fab fa-aws',
      'Microsoft': 'fab fa-microsoft',
      'Google': 'fab fa-google'
    };
    return icons[this.certification.issuer || ''] || 'fas fa-certificate';
  }
}
