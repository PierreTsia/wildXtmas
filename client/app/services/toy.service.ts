import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToylistComponent } from '../toylist/toylist.component';

@Injectable()
export class ToyService {

  selectedList:any[];
  
  constructor(private toylist: ToylistComponent) { }

  addToy(toy) {
    if (toy.picked == false){
      this.selectedList.push(toy);
      toy.picked = true;
      console.log(toy.picked)
    } else {
      console.log("already picked")
    }

  }
}
