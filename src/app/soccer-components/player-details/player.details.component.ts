


import {Component} from "@angular/core/src/metadata/directives";
import {OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Player} from "../../Entity/player.entity";

@Component({
  selector: 'player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})

export class PlayerDetailComponent implements OnInit{


  private players: Player[];
  private selectedPlayer : Player;

  constructor(private router: Router, private route: ActivatedRoute)
  {

  }

  ngOnInit() {
    this.route.params.forEach((params : Params) => {
      let id = params['id'];
      //this.selectedPlayer = players.find((player) => player.id === id);
      console.log(this.selectedPlayer);
    })
  }

}
