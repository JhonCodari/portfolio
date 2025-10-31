import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certification } from '../../../interfaces/certification.interface';

@Component({
  selector: 'app-aws-certification-card',
  imports: [CommonModule],
  templateUrl: './aws-certification-card.component.html',
  styleUrl: './aws-certification-card.component.scss'
})
export class AwsCertificationCardComponent {
  @Input() certification!: Certification;

  isExpired(): boolean {
    if (!this.certification.expiryDate) return false;
    return new Date() > new Date(this.certification.expiryDate);
  }

  getDaysUntilExpiry(): number {
    if (!this.certification.expiryDate) return 0;
    const today = new Date();
    const expiry = new Date(this.certification.expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
