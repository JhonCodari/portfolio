import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CardData {
  title?: string;
  description?: string;
  icon?: string;
  value?: string;
  label?: string;
  subtitle?: string;
  details?: Array<{icon: string, text: string}>;
  imageUrl?: string;
}

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data: CardData = {};
  @Input() variant: 'stat' | 'value' | 'profile' = 'value';
}
