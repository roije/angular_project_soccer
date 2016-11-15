import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  createPlayerForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.createPlayerForm = this.fb.group({
      'player-name': [''],
      'player-team': [''],
      'player-position': [''],
      'player-picture': ['']
    })
  }

  onSubmit(createPlayerForm) {
    if(createPlayerForm.valid) {
      console.log("valid")
    }
    else{
      console.log("invalid")
    }
  }
}
