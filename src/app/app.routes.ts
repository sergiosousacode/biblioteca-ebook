import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', title: 'Entrelinhas | Biblioteca de e-books', loadComponent: () => import('./features/home/home').then(module => module.Home) },
  { path: 'catalogo', title: 'Catálogo | Entrelinhas', loadComponent: () => import('./features/catalogo/catalogo').then(module => module.Catalogo) },
];
