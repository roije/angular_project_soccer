


import {Component} from "@angular/core/src/metadata/directives";
import {OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Player} from "../../Entity/player.entity";
import {PlayerService} from "../../services/player.service";

@Component({
  selector: 'player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})

export class PlayerDetailComponent implements OnInit{


  private selectedPlayer : Player;

  constructor(private router: Router, private route: ActivatedRoute, private playerService : PlayerService)
  {

  }

  ngOnInit() {
    this.route.params.forEach((params : Params) => {
      let id = params['id'];
      this.selectedPlayer = this.playerService.getAllLocalPlayers().find((player) => player._id === id);
      console.log(this.selectedPlayer);
    })
  }

  deletePlayer() : void {
    this.playerService.deletePlayer(this.selectedPlayer._id).subscribe(
      () => this.goToPlayerList()
    )
  }

  private goToPlayerList() : void {
    this.router.navigate(['/players/listplayers'])
  }

}
