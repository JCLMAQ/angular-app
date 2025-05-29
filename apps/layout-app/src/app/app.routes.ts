import { Route } from '@angular/router';

export const appRoutes: Route[] = [

{
    path: '',
    loadComponent: () =>
      import('../app/layout/layout.component').then(m => m.LayoutComponent),
    children: [
    {
        path: 'home',
        loadComponent: () =>
          import('../app/features/home/home-page.component').then(m => m.HomePageComponent),
      },

      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: '**', loadComponent: () => import('@fe/page-not-found').then(m => m.PageNotFoundComponent) },

    ],
  },

];
