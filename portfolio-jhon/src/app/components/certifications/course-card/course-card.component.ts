import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certification } from '../../../interfaces/certification.interface';
import { PdfPreviewComponent } from '../pdf-preview/pdf-preview.component';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, PdfPreviewComponent],
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
}
