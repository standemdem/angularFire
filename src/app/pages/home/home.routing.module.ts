import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule {
}
