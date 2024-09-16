import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then(
        (v) => v.HomeComponent
      ),
  },
  {
    path: 'test',
    loadComponent: () =>
      import(
        './test/test.component'
        ).then((v) => v.TestComponent),
  },
];
