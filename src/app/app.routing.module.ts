import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule'

  },
  {
    path: 'aboutUs',
    loadChildren: './pages/aboutus/about-us.module#AboutUsModule'

  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
