import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Catalogo } from './catalogo';

describe('Catalogo', () => {
  it('filters the rendered catalog and restores it through the empty-state action', async () => {
    await TestBed.configureTestingModule({ imports: [Catalogo], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(Catalogo);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    const search = element.querySelector<HTMLInputElement>('input[type="search"]')!;
    expect(element.querySelectorAll('#catalogo app-book-card')).toHaveLength(6);

    search.value = 'Clara';
    search.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(element.querySelectorAll('#catalogo app-book-card')).toHaveLength(2);

    const poetry = Array.from(element.querySelectorAll<HTMLButtonElement>('app-category-filter button')).find(button => button.textContent?.trim() === 'Poesia')!;
    poetry.click();
    await fixture.whenStable();
    expect(poetry.getAttribute('aria-pressed')).toBe('true');
    expect(element.querySelectorAll('#catalogo app-book-card')).toHaveLength(1);
    expect(element.querySelector('[role="status"]')?.textContent).toContain('1 livro encontrado');

    search.value = 'inexistente';
    search.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(element.querySelectorAll('#catalogo app-book-card')).toHaveLength(0);
    expect(element.textContent).toContain('Nenhum livro encontrado');
    element.querySelector<HTMLButtonElement>('.empty button')!.click();
    await fixture.whenStable();
    expect(search.value).toBe('');
    expect(element.querySelectorAll('#catalogo app-book-card')).toHaveLength(6);
    expect(poetry.getAttribute('aria-pressed')).toBe('false');
  });
});
