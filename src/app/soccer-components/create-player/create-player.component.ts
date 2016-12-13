import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {CreatePlayerValidators} from "./create-player.validators";
import {PlayerService} from "../../services/player.service";
import {Player} from "../../Entity/player.entity";

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  createPlayerForm: FormGroup;
  private selectedPlayer: Player;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private playerservice : PlayerService,
              private router : Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {

      let id = params['id'];
      this.selectedPlayer = Object.assign({}, this.playerservice.getDetailedPlayer(id));


      console.log(this.selectedPlayer);

    });

    this.createPlayerForm = this.fb.group({
      'playername': ['', Validators.compose([
        Validators.required, CreatePlayerValidators.getPlayerNameLengthValidator(),
        CreatePlayerValidators.getCharsValidator()
      ])],
      'playerteam': ['', Validators.compose([
        Validators.required, CreatePlayerValidators.getTeamNameLengthValidator()
      ])],
      'playerposition': ['', Validators.compose([
        Validators.required, CreatePlayerValidators.getCharsValidator()
      ])],
      'playerpicture': ['', Validators.compose([
        Validators.required, CreatePlayerValidators.getLinkValidator()
      ])]
    })
  }

  onSubmit(createPlayerForm) {


    if(createPlayerForm.valid) {

      if(this.selectedPlayer._id){
        this.playerservice.updatePlayer(this.selectedPlayer).subscribe(
          () => this.goToPlayerList()
        )
      }

      else {

        var player = {
          name : createPlayerForm.controls.playername.value,
          team : createPlayerForm.controls.playerteam.value,
          position : createPlayerForm.controls.playerposition.value,
          picture : createPlayerForm.controls.playerpicture.value
        };
        console.log(player);
        this.playerservice.createPlayer(player).subscribe(
          () => this.goToPlayerList()
        );

      }

    }
    else{
      console.log("invalid")
    }
  }

  private goToPlayerList() : void {
    this.router.navigate(['/players/listplayers'])
  }
}
