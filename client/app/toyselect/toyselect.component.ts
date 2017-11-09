import { Component, OnInit } from '@angular/core';
import { TOYS } from '../models/toymodels';
import { KIDS } from '../models/kidmodels';

@Component({
  selector: 'app-toyselect',
  templateUrl: './toyselect.component.html',
  styleUrls: ['./toyselect.component.scss']
})
export class ToyselectComponent implements OnInit {
  toys = TOYS;
  kids = KIDS;
  constructor() { }

  ngOnInit() {
  }

}
