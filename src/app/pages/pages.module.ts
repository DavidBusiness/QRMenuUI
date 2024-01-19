import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(PagesRoutes)
  ],
  declarations: [
    MenuComponent
  ],
})
export class PagesModule {}
