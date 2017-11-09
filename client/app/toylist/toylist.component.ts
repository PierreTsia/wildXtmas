import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToyService } from '../services/toy.service';

@Component({
  selector: 'app-toylist',
  templateUrl: './toylist.component.html',
  styleUrls: ['./toylist.component.scss']
})
export class ToylistComponent implements OnInit {

  //selectedList:any[];

  constructor() { }

  ngOnInit() {

  }

}
