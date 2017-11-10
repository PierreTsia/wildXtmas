import { Injectable } from '@angular/core';

@Injectable()
export class KidService {
  scanned = false;
  ;
  values = '';
  constructor() { }

  scanMethod(){

        this.scanned = true;
        console.log(this.values);        
    
  }

}
