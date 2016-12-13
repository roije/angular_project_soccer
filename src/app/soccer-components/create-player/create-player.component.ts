import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CreatePlayerValidators} from "./create-player.validators";
import {PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  createPlayerForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private playerservice : PlayerService,
              private router : Router) { }

  ngOnInit() {
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
      console.log("valid");
      var player = {
        name : createPlayerForm.controls.playername.value,
        team : createPlayerForm.controls.playerteam.value,
        position : createPlayerForm.controls.playerposition.value,
        picture : createPlayerForm.controls.playerpicture.value
      };
      this.playerservice.createPlayer(player).subscribe(
        () => this.goToPlayerList()
      );
    }
    else{
      console.log("invalid")
    }
  }

  private goToPlayerList() : void {
    this.router.navigate(['/players/listplayers'])
  }
}
