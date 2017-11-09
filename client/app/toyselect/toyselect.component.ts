import { Component, OnInit } from '@angular/core';
import { TOYS } from '../models/toymodels';

@Component({
  selector: 'app-toyselect',
  templateUrl: './toyselect.component.html',
  styleUrls: ['./toyselect.component.scss']
})
export class ToyselectComponent implements OnInit {
  toys = TOYS;
  constructor() { }

  ngOnInit() {
  }

}
