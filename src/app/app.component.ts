import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Player} from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  players: Player[];

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.db.collection('items').valueChanges()
      .subscribe((players: Player[]) => this.players = players);
  }
}
