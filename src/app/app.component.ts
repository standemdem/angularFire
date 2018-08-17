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
  newPlayer: Player = {number: 0, name: '', goals: 0, id: ''};

  constructor(private angularFirestore: AngularFirestore) {
  }

  ngOnInit() {
    this.angularFirestore.collection('items').valueChanges()
      .subscribe((players: Player[]) => this.players = players);
  }

  onSubmit() {
    console.log(this.newPlayer);
    const id = this.angularFirestore.createId();
    this.angularFirestore.doc('items/' + id)
      .set({...this.newPlayer, id});
  }

  onEdit(player: Player) {
    console.log(player);
    this.angularFirestore.doc('items/' + player.id)
      .update(player);
  }

  delete(player) {
    this.angularFirestore.doc('items/' + player.id)
      .delete();
  }
}
