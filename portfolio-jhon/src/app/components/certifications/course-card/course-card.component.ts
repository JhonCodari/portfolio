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
  imageLoadFailed = false;

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
      'NTT Data': 'fas fa-building',
      'Empresa': 'fas fa-building',
      'Amazon Web Services': 'fab fa-aws',
      'Microsoft': 'fab fa-microsoft',
      'Google': 'fab fa-google'
    };
    return icons[this.certification.issuer || ''] || 'fas fa-certificate';
  }

  openPdf(): void {
    if (this.certification.pdfPath) {
      window.open(this.certification.pdfPath, '_blank');
    }
  }

  downloadPdf(): void {
    if (this.certification.pdfPath) {
      const link = document.createElement('a');
      link.href = this.certification.pdfPath;
      link.download = this.extractFilename(this.certification.pdfPath);
      link.click();
    }
  }

  private extractFilename(path: string): string {
    return path.split('/').pop() || 'certificado.pdf';
  }

  getCardIcon(): string {
    return this.certification.isPdf ? 'fas fa-file-pdf' : 'fas fa-certificate';
  }

  onImageError(event: Event): void {
    if (this.imageLoadFailed) return; // evita loop infinito
    this.imageLoadFailed = true;
    const img = event.target as HTMLImageElement;
    img.src = this.getPlatformFallbackImage();
    img.classList.add('fallback-image');
  }

  private getPlatformFallbackImage(): string {
    const fallbacks: { [key: string]: string } = {
      'Alura': 'assets/icons/techs/java.svg',
      'Udemy': 'assets/icons/techs/review.svg',
      'Digital Innovation One': 'assets/icons/techs/java.svg',
      'NTT Data': 'assets/icons/techs/git.svg',
      'Amazon Web Services': 'assets/icons/techs/aws.svg'
    };
    return fallbacks[this.certification.issuer] || 'assets/icons/techs/review.svg';
  }
}
