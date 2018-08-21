import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutusComponent} from './aboutus.component';

const AboutUsRoutes: Routes = [
  {
    path: '',
    component: AboutusComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AboutUsRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AboutUsRoutingModule { }
