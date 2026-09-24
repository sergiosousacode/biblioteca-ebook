import { inject } from '@angular/core';
import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { BookService } from './core/services/book.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'livro/:id',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Server,
    async getPrerenderParams() {
      return inject(BookService).books.map(book => ({ id: book.id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
