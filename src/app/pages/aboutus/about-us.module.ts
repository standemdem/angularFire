import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutusComponent} from './aboutus.component';
import {AboutUsRoutingModule} from './aboutUs.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
  ],
  declarations: [AboutusComponent],
  exports: [AboutusComponent]
})
export class AboutUsModule {
}
