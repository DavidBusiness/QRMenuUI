import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full',
      },
      {
        path: 'menu',
        component: MenuComponent,
        data: {
          title: 'Menu',
        },
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];

@NgModule({
  imports: [CommonModule,
            MaterialModule,
            FormsModule,
            RouterModule.forRoot(routes)],
  declarations: [MenuComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
