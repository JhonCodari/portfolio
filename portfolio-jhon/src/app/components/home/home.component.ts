import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeInAnimation, scaleInAnimation } from '../../animations/portfolio.animations';
import { CardComponent, CardData } from '../../shared/card/card.component';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeInAnimation, scaleInAnimation]
})
export class HomeComponent implements OnInit {

  programmingTexts = [
    'Desenvolvedor Web Backend',
    'Experiência sólida com Java e Spring Boot',
    'Certificado em Cloud AWS',
    'Conhecimento em frontend com Angular'
  ];

  currentTextIndex = 0;
  currentText = '';
  isTyping = true;

  statsCards: CardData[] = [
    { value: '0', label: 'Anos de Experiência' },
    { value: '0', label: 'Projetos Concluídos' },
    { value: '0', label: 'Tecnologias' },
    { value: '100%', label: 'Dedicação' }
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.startTypingAnimation();
    this.loadExperienceYears();
    this.loadProjectsCount();
    this.loadTechnologiesCount();
  }

  private loadProjectsCount(): void {
    this.portfolioService.getProjects().subscribe(projects => {
      const projectCount = projects.length;
      this.statsCards[1].value = projectCount.toString();
    });
  }

  private loadTechnologiesCount(): void {
    this.portfolioService.getSkills().subscribe(skills => {
      const technologiesCount = skills.length;
      this.statsCards[2].value = `${technologiesCount.toString()}+`;
    });
  }

  private loadExperienceYears(): void {
    const experienceYears = this.portfolioService.getExperienceYears();
    this.statsCards[0].value = `${experienceYears}+`;
  }

  private startTypingAnimation(): void {
    const typeText = () => {
      const fullText = this.programmingTexts[this.currentTextIndex];

      if (this.isTyping) {
        if (this.currentText.length < fullText.length) {
          this.currentText = fullText.substring(0, this.currentText.length + 1);
          setTimeout(typeText, 100);
        } else {
          this.isTyping = false;
          setTimeout(typeText, 2000); // Pausa antes de apagar
        }
      } else {
        if (this.currentText.length > 0) {
          this.currentText = this.currentText.substring(0, this.currentText.length - 1);
          setTimeout(typeText, 50);
        } else {
          this.isTyping = true;
          this.currentTextIndex = (this.currentTextIndex + 1) % this.programmingTexts.length;
          setTimeout(typeText, 500);
        }
      }
    };

    typeText();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
