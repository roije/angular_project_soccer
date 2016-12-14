/**
 * Created by roije on 14/12/2016.
 */
import {TestBed, async} from '@angular/core/testing';
import {PlayerFilter} from './search-player.filter';

describe('App: Players', () => {
  beforeEach(() => {
    this.players = [
      {_id : "h8f8s7dhf9dsyf", name : "John Ronaldo", team : "Villareal", position : "CM", picture : "http://website.image.png"},
      {_id : "dsgfkjhsd", name : "John Messi", team : "Villareal", position : "GK", picture : "http://website.image.png"},
      {_id : "sdjfhsdjkhfgsd", name : "John Neymar", team : "England", position : "LM", picture : "http://website.image.png"},
      {_id : "sdhjfgdskf", name : "John Jordi", team : "Danmark", position : "LB", picture : "http://website.image.png"},
      {_id : "sdkjfhdsljkfs", name : "John Pique", team : "Somotherplace", position : "ANG", picture : "http://website.image.png"},
      {_id : "dfhjgkdjfg", name : "John Ramos", team : "Manchester", position : "CF", picture : "http://website.image.png"},
      {_id : "gfbjhkdfgbjdf", name : "John Macherano", team : "Bournmouth", position : "CDM", picture : "http://website.image.png"},
      {_id : "fbmnfndbgfdmn", name : "John Whocares", team : "Everton", position : "SS", picture : "http://website.image.png"}
    ];
     TestBed.configureTestingModule({
       declarations: [
         PlayerFilter
       ],
     })
  });

  describe('PlayerFilter', () => {
    let pipe = new PlayerFilter();
    it('Search is empty should return all players', () => {
      let result = pipe.transform(this.players, '');
      expect(result.length).toBe(this.players.length);
    })
    it('Length should be 8', () => {
      let result = pipe.transform(this.players, '');
      expect(result.length).toBe(8);
    })
    it('partial match on team name', () => {
      let result = pipe.transform(this.players, 'vil');
      expect(result.length).toBe(2);
    })
  })

})

