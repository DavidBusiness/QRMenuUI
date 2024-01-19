import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

export const PagesRoutes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
    data: {
      title: 'Menu',
    },
  },
];
