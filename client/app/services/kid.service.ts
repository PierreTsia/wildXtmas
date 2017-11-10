import { Injectable } from '@angular/core';

@Injectable()
export class KidService {
  scanned = false;
  constructor() { }

  scanMethod(){

        this.scanned = true;
        
    
  }

}
