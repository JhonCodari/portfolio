import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Certification } from '../../interfaces/certification.interface';
import { AwsCertificationCardComponent } from './aws-certification-card/aws-certification-card.component';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule, AwsCertificationCardComponent, CourseCardComponent],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent implements OnInit {
  awsCertifications: Certification[] = [];
  courseCertifications: Certification[] = [];
  filteredCourses: Certification[] = [];

  platforms: string[] = [];
  technologies: string[] = [];

  selectedPlatform: string = 'all';
  selectedTechnology: string = 'all';
  searchTerm: string = '';
  sortBy: 'date' | 'name' | 'platform' = 'date';

  isLoading: boolean = true;
  showFilters: boolean = false;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadCertifications();
    this.loadFilters();
  }

  loadCertifications(): void {
    this.isLoading = true;

    this.portfolioService.getFeaturedCertifications().subscribe(certs => {
      this.awsCertifications = certs;
      this.checkLoadingComplete();
    });

    this.portfolioService.getCourses().subscribe(courses => {
      this.courseCertifications = courses;
      this.filteredCourses = courses;
      this.applySorting();
      this.checkLoadingComplete();
    });
  }

  checkLoadingComplete(): void {
    if (this.awsCertifications.length > 0 || this.courseCertifications.length > 0) {
      setTimeout(() => this.isLoading = false, 500);
    }
  }

  loadFilters(): void {
    this.portfolioService.getCertifications().subscribe(certs => {
      const platformsSet = new Set(certs.map(c => c.issuer));
      const techSet = new Set(certs.flatMap(c => c.technologies || []));

      this.platforms = ['all', ...Array.from(platformsSet)];
      this.technologies = ['all', ...Array.from(techSet)];
    });
  }

  applyFilters(): void {
    this.filteredCourses = this.courseCertifications.filter(course => {
      const matchesPlatform = this.selectedPlatform === 'all' || course.issuer === this.selectedPlatform;
      const matchesTechnology = this.selectedTechnology === 'all' ||
        course.technologies?.some(tech => tech.toLowerCase() === this.selectedTechnology.toLowerCase());
      const matchesSearch = this.searchTerm === '' ||
        course.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.description?.toLowerCase().includes(this.searchTerm.toLowerCase());

      return matchesPlatform && matchesTechnology && matchesSearch;
    });

    this.applySorting();
  }

  onPlatformChange(platform: string): void {
    this.selectedPlatform = platform;
    this.applyFilters();
  }

  onTechnologyChange(technology: string): void {
    this.selectedTechnology = technology;
    this.applyFilters();
  }

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.applyFilters();
  }

  clearFilters(): void {
    this.selectedPlatform = 'all';
    this.selectedTechnology = 'all';
    this.searchTerm = '';
    this.filteredCourses = this.courseCertifications;
  }

  getTotalCertifications(): number {
    return this.awsCertifications.length + this.courseCertifications.length;
  }

  onSortChange(sortBy: 'date' | 'name' | 'platform'): void {
    this.sortBy = sortBy;
    this.applySorting();
  }

  applySorting(): void {
    this.filteredCourses = [...this.filteredCourses].sort((a, b) => {
      switch (this.sortBy) {
        case 'date':
          return new Date(b.issuedDate).getTime() - new Date(a.issuedDate).getTime();
        case 'name':
          return a.title.localeCompare(b.title);
        case 'platform':
          return a.issuer.localeCompare(b.issuer);
        default:
          return 0;
      }
    });
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  getTopTechnologies(): string[] {
    const techCount = new Map<string, number>();

    [...this.awsCertifications, ...this.courseCertifications].forEach(cert => {
      cert.technologies?.forEach(tech => {
        techCount.set(tech, (techCount.get(tech) || 0) + 1);
      });
    });

    return Array.from(techCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([tech]) => tech);
  }

  getTotalStudyHours(): number {
    // Estimativa: cada certificação AWS = 40h, cada curso = 20h
    return (this.awsCertifications.length * 40) + (this.courseCertifications.length * 20);
  }

  getFilteredCount(): number {
    return this.filteredCourses.length;
  }
}
