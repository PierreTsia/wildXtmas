import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToyService {

  selectedList:any[];
  letter:any[];
  
  constructor() { }

    getNgClass(toy) {
    
      return   {
        'picked': toy.picked == true,
        'unpicked': toy.picked == false,
      };
  }

  addToy(toy) {
    if (toy.picked == false){
      this.selectedList.push(toy);
      toy.picked = true;
      console.log(toy.picked)
    } else {
      console.log("already picked")
    }
    this.getNgClass(toy);

  }
  sendLetter(){
    let data = {
     toysList: this.selectedList,
     kidInfo: 
    }
    this.letter.push(data);
    
  }
}
