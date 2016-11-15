/**
 * Created by roije on 15/11/2016.
 */
import {FormControl} from '@angular/forms';

export class CreatePlayerValidators{

  static getPlayerNameLengthValidator() {
    return function nameValidator(control: FormControl): { [s: string]: boolean} {

      if(control.value.length < 3 || control.value.length > 30){
        return {invalidLenght: true}
      }
    }
  }

  static getCharsValidator() {
    return function charValidator(control: FormControl): { [s: string]: boolean} {

      if(control.value.match(/\d+/g)){
        return {invalidChars: true}
      }
    }
  }

  static getTeamNameLengthValidator() {
    return function nameValidator(control: FormControl): { [s: string]: boolean} {

      if(control.value.length < 2 || control.value.length > 40){
        return {invalidLenght: true}
      }
    }
  }

  static getLinkValidator() {
    return function linkValidator(control: FormControl): {[s: string]: boolean} {

      if(!control.value.match('(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})')){
        return {invalidLink: true}
      }
    }
  }
}
