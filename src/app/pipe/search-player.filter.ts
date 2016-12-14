/**
 * Created by roije on 14/12/2016.
 */
import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Player} from '../Entity/player.entity';

@Pipe({
  name: 'playerFilter'
})

@Injectable()
export class PlayerFilter implements PipeTransform{
  transform(items: Player[], args: string): any {
    console.log(args);
    if(args && items.length > 0) {
      console.log("halllo");
      let itemsFound = items.filter(
        item => item.name.toLowerCase().includes(args.toLowerCase())
      );

      if(itemsFound && itemsFound.length > 0) {
          return itemsFound;
      }
      return [-1]
    }
    return items;
  }

}
