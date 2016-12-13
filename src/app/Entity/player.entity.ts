/**
 * Created by christianhasselstrom on 06/12/2016.
 */
export class Player {
  _id: string;
  name: string;
  clubId: string;
  position: string;
  image: string;

  constructor(id : string, name : string, clubId : string, position : string, image : string) {
    this._id = id;
    this.name = name;
    this.clubId = clubId;
    this.position = position;
    this.image = image;
  }
}
