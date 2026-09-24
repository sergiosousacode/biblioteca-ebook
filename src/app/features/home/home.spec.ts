import { TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  it('renders the hero, featured selection and footer with working anchor targets', async () => {
    await TestBed.configureTestingModule({ imports: [Home] }).compileComponents();
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain('novos horizontes.');
    expect(element.querySelector('#destaques h2')?.textContent).toBe('Livros em destaque');
    expect(Array.from(element.querySelectorAll('#destaques h3'), heading => heading.textContent)).toEqual([
      'Versos do amanhecer', 'A casa das marés', 'Causos do sertão',
    ]);
    expect(element.querySelector('footer')?.textContent).toContain('Boas histórias merecem ser encontradas.');
    for (const link of element.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(element.querySelector(link.getAttribute('href')!)).not.toBeNull();
    }
  });

  it('filters the rendered catalog and restores it through the empty-state action', async () => {
    await TestBed.configureTestingModule({ imports: [Home] }).compileComponents();
    const fixture = TestBed.createComponent(Home);
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
    expect(element.querySelectorAll('#destaques app-book-card')).toHaveLength(3);
    element.querySelector<HTMLButtonElement>('.empty button')!.click();
    await fixture.whenStable();
    expect(search.value).toBe('');
    expect(element.querySelectorAll('#catalogo app-book-card')).toHaveLength(6);
    expect(poetry.getAttribute('aria-pressed')).toBe('false');
  });
});
