import { Injectable } from '@angular/core';

@Injectable()
export class KidService {
  scanned = false;
  
  values = '';
  background = false
  constructor() { }

  scanMethod(){

        this.scanned = true;
        console.log(this.values);        
        this.background = true;        
  }

}
