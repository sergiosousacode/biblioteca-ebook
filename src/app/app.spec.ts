import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] }).compileComponents();
  });

  it('navigates between home and catalog with a shared footer and valid skip targets', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/');
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('footer')).toHaveLength(1);
    expect(element.querySelector('footer')?.textContent).toContain('Boas histórias merecem ser encontradas.');
    expect(element.querySelector('.skip-link')?.getAttribute('href')).toBe('#conteudo');
    expect(element.querySelector('#conteudo')).not.toBeNull();
    element.querySelector<HTMLAnchorElement>('.explore')!.click();
    await fixture.whenStable();
    expect(router.url).toBe('/catalogo');
    expect(element.querySelector('h1')?.textContent).toBe('Nossa biblioteca');
    expect(element.querySelector('nav a')?.getAttribute('aria-current')).toBe('page');
    expect(element.querySelectorAll('footer')).toHaveLength(1);
    expect(element.querySelector('footer a')?.getAttribute('href')).toBe('#conteudo');
    expect(element.querySelector('#conteudo')).not.toBeNull();

    element.querySelector<HTMLAnchorElement>('.brand')!.click();
    await fixture.whenStable();
    expect(router.url).toBe('/');
    expect(element.querySelectorAll('#destaques app-book-card')).toHaveLength(3);
    expect(element.querySelector('nav a')?.hasAttribute('aria-current')).toBe(false);

    element.querySelector<HTMLAnchorElement>('nav a')!.click();
    await fixture.whenStable();
    expect(router.url).toBe('/catalogo');
  });

  it('loads the home page at the root route', async () => {
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('novos horizontes.');
    expect(harness.routeNativeElement?.querySelectorAll('#destaques app-book-card')).toHaveLength(3);
  });

  it('loads the catalog directly with its title and all books', async () => {
    const harness = await RouterTestingHarness.create('/catalogo');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Nossa biblioteca');
    expect(harness.routeNativeElement?.querySelectorAll('#catalogo app-book-card')).toHaveLength(6);
    expect(TestBed.inject(Title).getTitle()).toBe('Catálogo | Entrelinhas');
  });
});
