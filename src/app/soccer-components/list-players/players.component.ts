/**
 * Created by roije on 06/12/2016.
 */

import {players} from '../../mock-players';

import {Component} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'players-componenent',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent {

  private players = [];

  constructor(){
    this.players = players;
  }
}
