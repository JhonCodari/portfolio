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
      value: 'devjonatassilva@gmail.com',
      icon: 'assets/icons/email.svg'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'jonatas-silva-03400b16a',
      icon: 'assets/icons/linkedin.svg'
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'JhonCodari',
      icon: 'assets/icons/techs/github.svg'
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      value: '+55 81 98538-1254',
      icon: 'assets/icons/whatsapp.svg'
    },
    {
      type: 'location',
      label: 'Localização',
      value: 'Cabo de Santo Agostinho - PE',
      icon: '📍'
    }
  ];

  ngOnInit(): void {}

  trackByContact(index: number, contact: ContactInfo): string {
    return contact.type;
  }

}
