import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../core/services/book.service';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './livro.html',
  styleUrl: './livro.scss',
})
export class Livro {
  private readonly route = inject(ActivatedRoute);
  private readonly bookService = inject(BookService);
  private readonly params = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  protected readonly book = computed(() => this.bookService.getBookById(this.params().get('id') ?? ''));
  protected readonly categoryName = computed(() =>
    this.bookService.categories.find(category => category.id === this.book()?.categoryId)?.name ?? '',
  );
}
