/**
 * Created by roije on 13/12/2016.
 */
import {Injectable} from "@angular/core";
import {Player} from "../Entity/player.entity";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {create} from "domain";

@Injectable()
export class PlayerService{

  private players: Player[];
  private url: string = "http://soccers.herokuapp.com/players";

  constructor(private http : Http){

  }

  public getAllLocalPlayers() : Player[]{
    return this.players;
  }

  public getAllRemotePlayers() : Observable<Player[]> {
    return this.http.get(this.url)
      .map((res : Response) => {
        let data = res.json();
        this.players = data;
        return data || {};
      })
    .catch(this.handleError);
  }

  public getDetailedPlayer(id: string) : Player {
    let player = this.players.find(player => player._id === id);
    if(player) {
      return this.copyPlayerObject(player);
    }

    return <Player>{}; //<- det er giver ikke mening
  }


  public updatePlayer(player): Observable<string> {
    let options = this.getOptionsObject();

    return this.http.put(this.url + "/" + player._id, player, options)
      .map((res: Response) => {
        let index = this.find(player._id);
        this.players[index] = player;
      })
      .catch(this.handleError);
  }



  public createPlayer(player): Observable<Player> {
    let options = this.getOptionsObject();
    return this.http.post(this.url, player, options)
      .map((res: Response) => {
      let createdPlayer = res.json();
      this.players.push(createdPlayer);
      })
      .catch(this.handleError);

  }

  public handleError(error: Response | any) {
    return Observable.throw("Problem with request");
  }

  private getOptionsObject(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }

  private copyPlayerObject(playerToCopy: Player): Player {
    let player = Object.assign({}, playerToCopy);
    return player;
  }

  private find(id: string): number {
    for(let i=0; i < this.players.length; i++) {
      if (this.players[i]._id === id) {
        return i;
      }
    }
    return -1;
  }


}
