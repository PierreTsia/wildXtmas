import { Injectable } from '@angular/core';

@Injectable()
export class KidService {
  scanned = false;
  background = false
  constructor() { }

  scanMethod(){

        this.scanned = true;
        this.background = true;        
  }

}
