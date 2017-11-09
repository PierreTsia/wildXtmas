import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToylistComponent } from '../toylist/toylist.component';

@Injectable()
export class ToyService {

  selectedList:any[];
  
  constructor(private toylist: ToylistComponent) { }

  addToy(toy) {

    this.selectedList.push(toy);

  }
}
