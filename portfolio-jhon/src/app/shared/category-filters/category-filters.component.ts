import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CategoryFilter {
  key: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-category-filters',
  imports: [CommonModule],
  templateUrl: './category-filters.component.html',
  styleUrl: './category-filters.component.scss'
})
export class CategoryFiltersComponent {
  @Input() categories: CategoryFilter[] = [];
  @Input() selectedCategory: string = 'all';
  @Input() allCategoryLabel: string = '🌟 Todas';

  @Output() categoryChange = new EventEmitter<string>();

  selectCategory(category: string): void {
    this.categoryChange.emit(category);
  }
}
