import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home.routing.module';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    HomeRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {
}
