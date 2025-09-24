import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation, scaleInAnimation } from '../../animations/portfolio.animations';
import { ContactCardComponent, ContactInfo } from '../../shared/contact-card/contact-card.component';
import { ContactFormComponent } from '../../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ContactCardComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [fadeInAnimation, scaleInAnimation]
})
export class ContactComponent implements OnInit {

  contactMethods: ContactInfo[] = [
    {
      type: 'email',
      label: 'Email',
      value: 'jhon.codari@exemplo.com',
      icon: '📧'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'jhoncodari',
      icon: '💼'
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'JhonCodari',
      icon: '💻'
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      value: '+55 11 99999-9999',
      icon: '📱'
    },
    {
      type: 'location',
      label: 'Localização',
      value: 'São Paulo, Brasil',
      icon: '📍'
    }
  ];

  ngOnInit(): void {}

  trackByContact(index: number, contact: ContactInfo): string {
    return contact.type;
  }

}
