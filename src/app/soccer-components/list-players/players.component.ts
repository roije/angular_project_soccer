/**
 * Created by roije on 06/12/2016.
 */

import {Component} from "@angular/core/src/metadata/directives";
import {Player} from "../../Entity/player.entity";
import {Router} from "@angular/router";
import {PlayerService} from "../../services/player.service";
import {OnInit} from "@angular/core";

@Component({
  selector: 'players-componenent',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {

  private players: Player[]
  private message : string;

  constructor(private router: Router, private playerService : PlayerService){

  }

  ngOnInit() : void {
    this.players = this.playerService.getAllLocalPlayers();

    if(!this.players){
      this.message = "Retrieving players...";

      this.playerService.getAllRemotePlayers().subscribe(
        (players) => {
          this.players = players;
          this.message = "";
          console.log(this.players);
        },
          error => this.message = error
      );
    }
  }

  goToPlayer(player: Player) : void {
    let link = ['players/playerdetails', player._id];
    this.router.navigate(link);

  }


}
