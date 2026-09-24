import { Injectable } from '@angular/core';
import { BOOKS, CATEGORIES } from '../data/books.mock';
import { Book } from '../models/book';

@Injectable({ providedIn: 'root' })
export class BookService {
  readonly books = BOOKS;
  readonly categories = CATEGORIES;
  readonly featuredBooks: readonly Book[] = BOOKS.slice(0, 3);

  filterBooks(query: string, categoryId: string): readonly Book[] {
    const term = this.normalize(query);
    return this.books.filter(book =>
      (!categoryId || book.categoryId === categoryId) &&
      (!term || this.normalize(book.title).includes(term) || this.normalize(book.author).includes(term)),
    );
  }

  private normalize(value: string): string {
    return value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
  }
}
