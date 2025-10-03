import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation, scaleInAnimation } from '../../animations/portfolio.animations';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { CategoryFiltersComponent, CategoryFilter } from '../../shared/category-filters/category-filters.component';
import { Project } from '../../interfaces/project.interface';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent, CategoryFiltersComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [fadeInAnimation, scaleInAnimation]
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  categories: CategoryFilter[] = [];
  selectedCategory: string = 'all';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadProjects();
    this.loadCategories();
  }

  private loadProjects(): void {
    this.portfolioService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  private loadCategories(): void {
    this.portfolioService.getCategoriesFilters().subscribe(categories => {
      this.categories = categories;
    });
  }

  filterProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  trackByProject(index: number, project: Project): number {
    return project.id;
  }
}
