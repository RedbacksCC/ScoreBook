import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  players: FirebaseListObservable<any[]>;
  tournaments: FirebaseObjectObservable<any>;


  constructor(public navCtrl: NavController, public af: AngularFire) {
        
        this.tournaments = this.af.database.object('/tournaments');

console.log("tournaments",this.tournaments);

    this.players = this.af.database.list('/players', {
      query: {
        orderByChild: 'timestamp'
      }
    });

    console.log("players", this.players)

  }

}
