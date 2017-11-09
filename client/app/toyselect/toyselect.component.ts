import { Component, OnInit } from '@angular/core';
import { TOYS } from '../models/toymodels';
import { Toy } from '../models/toy';
import { ToylistComponent } from '../toylist/toylist.component';
import { ToyService } from '../services/toy.service';

@Component({
  selector: 'app-toyselect',
  templateUrl: './toyselect.component.html',
  styleUrls: ['./toyselect.component.scss']
})
export class ToyselectComponent implements OnInit {
  toys = TOYS;
  selectedToy: Toy;
  constructor(private toyservice: ToyService)  { }

  ngOnInit() {
    this.toyservice.selectedList=[];
  }
  onSelect(toy: Toy) {
    this.toyservice.getNgClass(toy);
    this.toyservice.addToy(toy);
    console.log(this.toyservice.selectedList);
  }

  
}
