/**
 * Created by roije on 13/12/2016.
 */
import {Injectable} from "@angular/core";
import {Player} from "../Entity/player.entity";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class PlayerService{

  private players: Player[];
  private url: string = "http://soccerapi.herokuapp.com/api/players";

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

  public handleError(error: Response | any) {
    return Observable.throw("Problem with request");
  }

}
