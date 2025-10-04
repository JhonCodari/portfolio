import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation } from '../../animations/portfolio.animations';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  isPresent?: boolean;
}

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  template: `
    <div class="timeline-section">
      <h3 class="subsection-title" [@fadeIn]>{{ title }}</h3>
      <div class="timeline">
        <div class="timeline-item" *ngFor="let item of items; let i = index" [@fadeIn]>
          <div class="timeline-marker" [class.present]="item.isPresent">
            <span class="year" *ngIf="!item.isPresent">{{ item.year }}</span>
          </div>
          <div class="timeline-content" [class.present]="item.isPresent">
            <div class="present-tag" *ngIf="item.isPresent">Hoje</div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './timeline.component.scss',
  animations: [fadeInAnimation]
})
export class TimelineComponent {
  @Input() title: string = 'Minha Jornada';
  @Input() items: TimelineItem[] = [];
}
