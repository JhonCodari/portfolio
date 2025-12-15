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
  filteredProjects: Project[] = [];
  categories: CategoryFilter[] = [];
  selectedCategory: string = 'all';
  searchTerm: string = '';
  sortBy: 'date' | 'name' = 'date';
  isLoading: boolean = true;
  showFilters: boolean = false;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadProjects();
    this.loadCategories();
  }

  private loadProjects(): void {
    this.isLoading = true;
    this.portfolioService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
      this.applySorting();
      setTimeout(() => this.isLoading = false, 600);
    });
  }

  private loadCategories(): void {
    this.portfolioService.getCategoriesFilters().subscribe(categories => {
      this.categories = categories;
    });
  }

  filterProjects(): void {
    let filtered = this.projects;

    // Filtro por categoria
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === this.selectedCategory);
    }

    // Filtro por busca
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchLower))
      );
    }

    this.filteredProjects = filtered;
    this.applySorting();
  }

  applySorting(): void {
    this.filteredProjects = [...this.filteredProjects].sort((a, b) => {
      if (this.sortBy === 'date') {
        return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
    this.filterProjects();
  }

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.filterProjects();
  }

  onSortChange(sortBy: 'date' | 'name'): void {
    this.sortBy = sortBy;
    this.applySorting();
  }

  clearFilters(): void {
    this.selectedCategory = 'all';
    this.searchTerm = '';
    this.filterProjects();
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  getFilteredCount(): number {
    return this.filteredProjects.length;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  trackByProject(index: number, project: Project): number {
    return project.id;
  }
}
