import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyAD75HZIr-PI88mgpW-Y8H9H2Kv_fxNtGY",
    authDomain: "redbackscc-80917.firebaseapp.com",
    databaseURL: "https://redbackscc-80917.firebaseio.com",
    storageBucket: "redbackscc-80917.appspot.com",
    messagingSenderId: "883479279516"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
