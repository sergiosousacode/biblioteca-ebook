import { Component, computed, inject, signal } from '@angular/core';
import { BookService } from '../../core/services/book.service';
import { BookCard } from '../../shared/components/book-card/book-card';
import { SearchInput } from '../../shared/components/search-input/search-input';
import { CategoryFilter } from '../../shared/components/category-filter/category-filter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookCard, SearchInput, CategoryFilter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly bookService = inject(BookService);
  protected readonly featuredBooks = this.bookService.featuredBooks;
  protected readonly categories = this.bookService.categories;
  protected readonly query = signal('');
  protected readonly category = signal('');
  protected readonly books = computed(() => this.bookService.filterBooks(this.query(), this.category()));

  protected categoryName(id: string): string {
    return this.categories.find(category => category.id === id)?.name ?? '';
  }

  protected clearFilters(): void {
    this.query.set('');
    this.category.set('');
  }
}
