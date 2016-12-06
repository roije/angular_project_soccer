

import {players} from '../../mock-players';

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

  constructor(private selectedPlayer : Player, private router: Router, private route: ActivatedRoute)
  {
    this.players = players;
  }

  ngOnInit() {
    this.route.params.forEach((params : Params) => {
      let id = params['id'];
      console.log(id);
    })
  }

}
