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
  
  constructor(private toyService: ToyService, private kidService: KidService) { }


  ngOnInit() {
  }


}
