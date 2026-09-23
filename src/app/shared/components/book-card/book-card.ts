import { Component, input } from '@angular/core';
import { Book } from '../../../core/models/book';

@Component({
  selector: 'app-book-card',
  standalone: true,
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  readonly book = input.required<Book>();
  readonly categoryName = input.required<string>();
}
