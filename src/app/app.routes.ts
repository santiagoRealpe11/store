import { Routes } from '@angular/router';
import { List } from '@products/pages/list/list';
import { ProductDetail } from '@products/pages/product-detail/product-detail';
import { About } from '@info/pages/about/about';
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
          import('./domains/shared/services/product').then((m) => m.ProductService),
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
