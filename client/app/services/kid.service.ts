import { Injectable } from '@angular/core';

@Injectable()
export class KidService {
  scanned = false;
  constructor() { }

  scanMethod(){
       return this.scanned = true;
    
  }

}
