import { Routes } from '@angular/router';
import { NotFound } from '@info/pages/not-found/not-found';
import { Layout } from '@shared/components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/products/pages/list/list').then((m) => m.List),
      },
      {
        path: 'about',
        loadComponent: () => import('./domains/info/pages/about/about').then((m) => m.About),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./domains/products/pages/product-detail/product-detail').then(
            (m) => m.ProductDetail
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
