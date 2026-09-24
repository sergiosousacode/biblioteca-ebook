import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Book } from '../../../core/models/book';
import { BookCard } from './book-card';

const book: Book = {
  id: 'livro-teste', title: 'Uma nova história', author: 'Autora fictícia',
  categoryId: 'poesia', coverUrl: '/images/covers/amanhecer.svg',
  synopsis: 'Versos para descobrir.', publicationYear: 2024, pdfUrl: null,
};

describe('BookCard', () => {
  it('renders the supplied book and updates when reused for another book', async () => {
    await TestBed.configureTestingModule({ imports: [BookCard], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(BookCard);
    fixture.componentRef.setInput('book', book);
    fixture.componentRef.setInput('categoryName', 'Poesia');
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    const cover = element.querySelector('img')!;

    expect(element.querySelector('h3')?.textContent).toBe(book.title);
    expect(element.querySelector('.author')?.textContent).toBe(book.author);
    expect(element.querySelector('.synopsis')?.textContent).toBe(book.synopsis);
    expect(element.querySelector('.category')?.textContent).toBe('Poesia');
    expect(cover.getAttribute('src')).toBe(book.coverUrl);
    expect(cover.alt).toBe('Capa de ' + book.title);
    expect(element.querySelector('h3 a')?.getAttribute('href')).toBe('/livro/livro-teste');
    expect(cover.getAttribute('loading')).toBe('lazy');

    fixture.componentRef.setInput('book', { ...book, id: 'outro-livro', title: 'Outra história', coverUrl: '/images/covers/mares.svg' });
    fixture.componentRef.setInput('categoryName', 'Literatura');
    await fixture.whenStable();
    expect(element.querySelector('h3')?.textContent).toBe('Outra história');
    expect(element.querySelector('.category')?.textContent).toBe('Literatura');
    expect(cover.alt).toBe('Capa de Outra história');
    expect(element.querySelector('h3 a')?.getAttribute('href')).toBe('/livro/outro-livro');
    expect(cover.getAttribute('src')).toBe('/images/covers/mares.svg');
  });
});
