import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  it('renders the hero, featured selection and catalog link', async () => {
    await TestBed.configureTestingModule({ imports: [Home], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain('novos horizontes.');
    expect(element.querySelector('#destaques h2')?.textContent).toBe('Livros em destaque');
    expect(Array.from(element.querySelectorAll('#destaques h3'), heading => heading.textContent)).toEqual([
      'Versos do amanhecer', 'A casa das marés', 'Causos do sertão',
    ]);
    expect(element.querySelector('.explore')?.getAttribute('href')).toBe('/catalogo');
    expect(element.querySelector('input[type="search"]')).toBeNull();
  });
});
