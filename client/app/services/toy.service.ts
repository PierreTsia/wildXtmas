import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToyService {

  selectedList: any[];
  letterData: any;
  toto:string;
  public listComplete: Boolean = false;


  constructor() { }



  addToy(toy) {
    if (toy.picked == false) {
      this.selectedList.push(toy);
      toy.picked = true;
      console.log(toy.picked)
    } else {
      console.log("already picked")
    }
    if (this.selectedList.length == 5){
      console.log("fini");
      this.listComplete = true;
    }
    this.getNgClass(toy);

  }

  getNgClass(toy) {
    
        return {
          'picked': toy.picked == true || this.selectedList.length == 5,
          'unpicked': toy.picked == false ,
        };
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
