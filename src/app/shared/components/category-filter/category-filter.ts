import { Component, input, output } from '@angular/core';
import { Category } from '../../../core/models/category';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.scss',
})
export class CategoryFilter {
  readonly categories = input.required<readonly Category[]>();
  readonly selected = input('');
  readonly selectedChange = output<string>();
}
