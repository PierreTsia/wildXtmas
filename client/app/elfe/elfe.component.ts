import { Component, OnInit } from '@angular/core';
import { ToyService } from '../services/toy.service';

import { KIDS } from '../models/kidmodels';
import { KidService } from '../services/kid.service';

@Component({
  selector: 'app-elfe',
  templateUrl: './elfe.component.html',
  styleUrls: ['./elfe.component.scss']
})
export class ElfeComponent implements OnInit {

  kids = KIDS;
  values = '';
  url = "";
  constructor(private toyService: ToyService) { }


  ngOnInit() {
  }

  done(item){
    //this.toyService.changeStatusToTrue();
    console.log(item.status);
    item.status = true;
    console.log(item.status);
  }

  getTechImg(item){
    
    console.log(item.imgTechUrl);
    this.url = item.imgTechUrl;
    console.log("url :"+this.url)
    return this.url;
    
  }
}
