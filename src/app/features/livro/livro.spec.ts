import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { Livro } from './livro';

describe('Livro', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ providers: [provideRouter(routes)] }).compileComponents();
  });

  it('loads book details directly and explains the disabled PDF actions', async () => {
    const harness = await RouterTestingHarness.create('/livro/versos-do-amanhecer');
    const element = harness.routeNativeElement!;
    const cover = element.querySelector<HTMLImageElement>('.cover')!;

    expect(element.querySelector('h1')?.textContent).toBe('Versos do amanhecer');
    expect(element.querySelector('.author')?.textContent).toBe('Clara Monte');
    expect(element.querySelector('.category')?.textContent).toBe('Poesia');
    expect(element.querySelector('.year')?.textContent).toContain('2021');
    expect(element.querySelector('.synopsis')?.textContent).toBe('Poemas sobre os pequenos recomeços que habitam cada manhã.');
    expect(cover.getAttribute('src')).toBe('/images/covers/amanhecer.svg');
    expect(cover.alt).toBe('Capa de Versos do amanhecer');
    const buttons = Array.from(element.querySelectorAll<HTMLButtonElement>('.actions button'));
    expect(buttons.map(button => button.textContent?.trim())).toEqual(['Ler', 'Baixar PDF']);
    for (const button of buttons) {
      expect(button.disabled).toBe(true);
      expect(button.getAttribute('aria-describedby')).toBe('pdf-availability');
    }
    expect(element.querySelector('#pdf-availability')?.textContent).toContain('ainda não estão disponíveis');
    expect(element.querySelector('.back-link')?.getAttribute('href')).toBe('/catalogo');
  });

  it('updates a reused page when the ID changes, including missing and valid books', async () => {
    const harness = await RouterTestingHarness.create();
    const first = await harness.navigateByUrl('/livro/versos-do-amanhecer', Livro);
    const second = await harness.navigateByUrl('/livro/casa-das-mares', Livro);
    expect(second).toBe(first);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('A casa das marés');
    expect(harness.routeNativeElement?.querySelector('.author')?.textContent).toBe('Tomás Vale');
    expect(harness.routeNativeElement?.querySelector('.category')?.textContent).toBe('Literatura');

    await harness.navigateByUrl('/livro/inexistente', Livro);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Livro não encontrado');
    expect(harness.routeNativeElement?.querySelector('.book-details')).toBeNull();
    expect(harness.routeNativeElement?.querySelector('.actions')).toBeNull();

    await harness.navigateByUrl('/livro/causos-do-sertao', Livro);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Causos do sertão');
    expect(harness.routeNativeElement?.querySelector('.not-found')).toBeNull();
  });

  it('handles direct access to a missing ID with a catalog return link', async () => {
    const harness = await RouterTestingHarness.create('/livro/inexistente');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Livro não encontrado');
    expect(harness.routeNativeElement?.querySelector('.back-link')?.getAttribute('href')).toBe('/catalogo');
    expect(harness.routeNativeElement?.querySelector('img')).toBeNull();
  });
});
