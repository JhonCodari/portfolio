import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation, scaleInAnimation } from '../../animations/portfolio.animations';
import { CardComponent, CardData } from '../../shared/card/card.component';
import { TimelineComponent } from '../../shared/timeline/timeline.component';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalValue, TimelineItem } from '../../interfaces/about.interface';

@Component({
  selector: 'app-about',
  imports: [CommonModule, CardComponent, TimelineComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [fadeInAnimation, scaleInAnimation]
})
export class AboutComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) {}

  personalInfo = {
    displayName: 'Jhon Codari',
    realName: 'Jonatas Severino da Silva',
    title: 'Desenvolvedor Backend Java | AWS',
    location: 'Cabo de Santo Agostinho - PE',
    experience: '0+ anos',
    education: 'Análise e Desenvolvimento de Sistemas - Faculdade ELO',
    email: 'devjonatassilva@gmail.com'
  };

  aboutText = ``;

  mission = `
    Minha missão é buscar constantemente o crescimento pessoal e profissional, utilizando o conhecimento
    como ferramenta de libertação e transformação. Quero facilitar a vida das pessoas, criando soluções
    que lhes permitam ter mais tempo para se dedicarem às suas paixões e às pessoas que amam.

    Acredito que a educação e o desenvolvimento contínuo são as chaves para a realização pessoal e o
    empoderamento. Quero inspirar e ajudar os outros a se libertarem das limitações, mostrando que é
    possível alcançar uma vida mais feliz, próspera e significativa, mesmo diante de desafios.

    Meu objetivo é me tornar uma referência na minha área de atuação, construindo produtos e serviços
    que melhorem a vida das pessoas. Desejo criar um impacto positivo não apenas na minha família, mas
    na sociedade como um todo, ajudando pessoas a realizarem seus próprios sonhos.

    Quero ser lembrado como alguém que foi sempre sincero, alegre, confiável, e que soube fazer a
    diferença através de conselhos, exemplos e oportunidades. Meu legado será o de superação, de lutas
    vencidas, e de alguém que usou o sucesso pessoal para gerar oportunidades e mudanças na vida de
    outras pessoas.
  `;

  personalValues: PersonalValue[] = [];
  timeline: TimelineItem[] = [];

  // Estados de carregamento
  isLoadingPersonalValues = true;
  isLoadingTimeline = true;

  profileCard: CardData = {
    title: '',
    subtitle: '',
    details: []
  };

  ngOnInit(): void {
    this.loadDynamicValues();
    this.loadPersonalValues();
    this.loadTimelineFromService();
  }

  private loadDynamicValues(): void {
    const years = this.portfolioService.getExperienceYears();
    this.personalInfo.experience = `${years}+ anos`;
    this.aboutText = `
      Olá! Meu nome é Jonatas Severino da Silva, mas profissionalmente sou conhecido como Jhon Codari.
      Sou um desenvolvedor Backend Java com mais de ${years} anos de experiência criando
      soluções robustas e escaláveis no setor financeiro.

      Formado em Análise e Desenvolvimento de Sistemas pela Faculdade ELO (Recife), atualmente trabalho
      em uma das maiores consultorias de tecnologia do mundo, onde atuo principalmente em projetos para
      gigantes do setor financeiro nacional. Possuo certificações AWS e aplico conhecimentos de cloud
      computing no meu dia a dia profissional.

      Estou sempre estudando e me capacitando, aplicando constantemente o conhecimento adquirido no meu
      trabalho. Acredito que a educação e o desenvolvimento contínuo são as chaves para a realização
      pessoal e profissional.
    `;

    this.profileCard = {
      title: this.personalInfo.displayName,
      subtitle: this.personalInfo.title,
      imageUrl: './assets/img/eu.jpg',
      details: [
        { icon: '📍', text: this.personalInfo.location },
        { icon: '⏰', text: `${this.personalInfo.experience} de experiência` },
        { icon: '🎓', text: this.personalInfo.education },
        { icon: '✉️', text: this.personalInfo.email }
      ]
    };
  }



  private loadPersonalValues(): void {
    this.isLoadingPersonalValues = true;
    this.portfolioService.getPersonalValues().subscribe({
      next: (values: PersonalValue[]) => {
        this.personalValues = values;
        this.isLoadingPersonalValues = false;
      },
      error: () => {
        this.isLoadingPersonalValues = false;
      }
    });
  }

  private loadTimelineFromService(): void {
    this.isLoadingTimeline = true;
    this.portfolioService.getTimelineData().subscribe({
      next: (timeline: TimelineItem[]) => {
        this.timeline = timeline;
        this.isLoadingTimeline = false;
      },
      error: () => {
        this.isLoadingTimeline = false;
      }
    });
  }

  // Método para otimizar a renderização de listas
  trackByIndex(index: number, item: any): number {
    return index;
  }
}
