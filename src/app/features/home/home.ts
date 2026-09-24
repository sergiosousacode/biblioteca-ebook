import { Component, inject } from '@angular/core';
import { BookService } from '../../core/services/book.service';
import { BookCard } from '../../shared/components/book-card/book-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly bookService = inject(BookService);
  protected readonly featuredBooks = this.bookService.featuredBooks;
  protected readonly categories = this.bookService.categories;

  protected categoryName(id: string): string {
    return this.categories.find(category => category.id === id)?.name ?? '';
  }
}
