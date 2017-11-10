import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToyService {

  selectedList: any[];
  letterData: any;
  toto:string;

  constructor() { }

  getNgClass(toy) {

    return {
      'picked': toy.picked == true,
      'unpicked': toy.picked == false,
    };
  }

  addToy(toy) {
    if (toy.picked == false) {
      this.selectedList.push(toy);
      toy.picked = true;
      console.log(toy.picked)
    } else {
      console.log("already picked")
    }
    this.getNgClass(toy);

  }

  sendLetter() {
    this.selectedList.forEach((toyItem) =>{
      this.letterData.push(toyItem);
    });
    
    
  }

  /*changeStatusToTrue(){
    this.letterData[0].status = true;
    console.log("ici "+this.letterData[0].status);
  }*/
}
