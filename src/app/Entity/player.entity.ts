/**
 * Created by christianhasselstrom on 06/12/2016.
 */
export class Player {
  id: string;
  name: string;
  team: string;
  position: string;
  picture: string;

  constructor(id : string, name : string, team : string, position : string, picture : string) {
    this.id = id;
    this.name = name;
    this.team = team;
    this.position = position;
    this.picture = picture;
  }
}
