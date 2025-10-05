import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ContactInfo {
  type: 'email' | 'phone' | 'location' | 'linkedin' | 'github' | 'whatsapp';
  label: string;
  value: string;
  link?: string;
  icon: string;
}

@Component({
  selector: 'app-contact-card',
  imports: [CommonModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
  @Input() contact!: ContactInfo;
  @Input() animationDelay: number = 0;

  getContactLink(): string {
    if (this.contact.link) {
      return this.contact.link;
    }

    switch (this.contact.type) {
      case 'email':
        return `mailto:${this.contact.value}`;
      case 'phone':
        return `tel:${this.contact.value}`;
      case 'whatsapp':
        return `https://wa.me/${this.contact.value.replace(/\D/g, '')}`;
      case 'linkedin':
        return `https://linkedin.com/in/${this.contact.value}`;
      case 'github':
        return `https://github.com/${this.contact.value}`;
      default:
        return '#';
    }
  }

  shouldOpenExternal(): boolean {
    return ['linkedin', 'github', 'whatsapp'].includes(this.contact.type);
  }

  isIconImage(icon: string): boolean {
    return icon.includes('.svg') || icon.includes('.png') || icon.includes('.jpg') || icon.includes('.jpeg') || icon.includes('.gif') || icon.includes('.webp');
  }
}
