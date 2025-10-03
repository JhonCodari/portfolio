import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation, scaleInAnimation } from '../../animations/portfolio.animations';
import { CardComponent, CardData } from '../../shared/card/card.component';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule, CardComponent],
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
    email: 'jhon.codari@example.com'
  };

  aboutText = `
    Olá! Meu nome é Jonatas Severino da Silva, mas profissionalmente sou conhecido como Jhon Codari.
    Sou um desenvolvedor Backend Java com experiência sólida criando
    soluções robustas e escaláveis no setor financeiro.

    Formado em Análise e Desenvolvimento de Sistemas pela Faculdade ELO (Recife), atualmente trabalho
    em uma das maiores consultorias de tecnologia do mundo, onde atuo principalmente em projetos para
    gigantes do setor financeiro nacional. Possuo certificações AWS e aplico conhecimentos de cloud
    computing no meu dia a dia profissional.

    Estou sempre estudando e me capacitando, aplicando constantemente o conhecimento adquirido no meu
    trabalho. Acredito que a educação e o desenvolvimento contínuo são as chaves para a realização
    pessoal e profissional.
  `;

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

  values: CardData[] = [
    {
      title: 'Excelência Técnica',
      description: 'Código robusto, escalável e bem arquitetado é fundamental para soluções de qualidade.',
      icon: '🎯'
    },
    {
      title: 'Crescimento Contínuo',
      description: 'Sempre estudando e aplicando novos conhecimentos para me tornar uma referência na área.',
      icon: '�'
    },
    {
      title: 'Impacto Positivo',
      description: 'Criar soluções que facilitem a vida das pessoas e gerem valor real para a sociedade.',
      icon: '🌟'
    },
    {
      title: 'Confiabilidade',
      description: 'Ser sincero, alegre e confiável, construindo relacionamentos duradouros e significativos.',
      icon: '🤝'
    }
  ];

  profileCard: CardData = {
    title: '',
    subtitle: '',
    details: []
  };

  timeline = [
    {
      year: '2020',
      title: 'Início da Carreira',
      description: 'Apesar de já programar recreativamente desde os 12 anos de idade, considero que o ingresso na faculdade marcou o início de minha jornada como desenvolvedor profissional, focando em Java e desenvolvimento web.'
    },
    {
      year: '2021',
      title: 'Migração de Carreira',
      description: 'Ingressei em uma das maiores consultorias de tecnologia do mundo para realizar meu estágio.'
    },
    {
      year: '2021',
      title: 'Especialização em Java',
      description: 'Aprofundei conhecimentos no ecossistema Spring e desenvolvimento de APIs robustas.'
    },
    {
      year: '2022',
      title: 'Efetivação na Consultoria',
      description: 'Fui efetivado como desenvolvedor na consultoria, atuando em projetos desafiadores como desenvolvedor júnior.'
    },
    {
      year: '2022',
      title: 'Formação Acadêmica',
      description: 'Concluí o curso de Análise e Desenvolvimento de Sistemas na Faculdade ELO, em Recife.'
    },
    {
      year: '2023',
      title: 'Certificações AWS',
      description: 'Obtive certificações AWS e comecei a aplicar conhecimentos de cloud computing em projetos.'
    },
    {
      year: '2023',
      title: 'Promoção a desenvolvedor pleno',
      description: 'Fui promovido a desenvolvedor pleno na consultoria, assumindo mais responsabilidades e trabalhando em projetos com mais autonomia.'
    },
    {
      year: 'Hoje',
      title: 'Desenvolvedor Backend Sênior',
      description: 'Atualmente trabalho como desenvolvedor backend especializado em Java/Spring, liderando iniciativas técnicas em grandes projetos do setor financeiro. Aplico meus conhecimentos em AWS cloud computing, mentorio desenvolvedores juniores e busco constantemente inovação tecnológica. Meu foco atual é me tornar uma referência técnica na área, contribuindo para soluções que impactem milhões de usuários no sistema financeiro nacional.',
      isPresent: true
    }
  ];

  ngOnInit(): void {
    this.loadDynamicValues();
  }

  private loadDynamicValues(): void {
    const years = this.portfolioService.getExperienceYears();
    this.personalInfo.experience = `${years}+ anos`;

    // Atualiza o aboutText com o valor dinâmico
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

    // Atualiza o profileCard com o valor dinâmico
    this.profileCard = {
      title: this.personalInfo.displayName,
      subtitle: this.personalInfo.title,
      details: [
        { icon: '📍', text: this.personalInfo.location },
        { icon: '⏰', text: `${this.personalInfo.experience} de experiência` },
        { icon: '🎓', text: this.personalInfo.education },
        { icon: '✉️', text: this.personalInfo.email }
      ]
    };
  }
}
