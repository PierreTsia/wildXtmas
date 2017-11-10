import { Injectable } from '@angular/core';

@Injectable()
export class KidService {
  scanned = false;
  ;
  values = '';
  add=["Rouen", "Paris"]
  constructor() { }

  scanMethod(){

        this.scanned = true;
  }

}
