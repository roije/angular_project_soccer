/**
 * Created by roije on 06/12/2016.
 */

import {players} from '../../mock-players';

import {Component} from "@angular/core/src/metadata/directives";
import {Player} from "../../Entity/player.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'players-componenent',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent {

  private players = [];

  constructor(private router: Router){
    this.players = players;
  }

  goToPlayer(player: Player) : void {
    let link = ['players/playerdetails', player.id];
    this.router.navigate(link);

  }


}
