import { Component, OnInit } from '@angular/core';
import { TOYS } from '../models/toymodels';
import { Toy } from '../models/toy';
import { ToylistComponent } from '../toylist/toylist.component';
import { ToyService } from '../services/toy.service';
declare var Modernizr: any;
@Component({
  selector: 'app-toyselect',
  templateUrl: './toyselect.component.html',
  styleUrls: ['./toyselect.component.scss']
})
export class ToyselectComponent implements OnInit {
  toys = TOYS;
  selectedToy: Toy;
  theta=0;
  constructor(private toyservice: ToyService) { }

  ngOnInit() {
    this.toyservice.selectedList = [];
  }
  carouselControl(increment) {
    let carousel = document.getElementById('carousel');
    let navButtons = document.querySelectorAll('.totocarousel button');
    let panelCount = 20;
    let transformProp = Modernizr.prefixed('transform');

    this.theta += (360 / panelCount) * increment * -1;
    carousel.style[transformProp] = 'translateZ( -663px ) rotateY(' + this.theta + 'deg)';
  }
  onSelect(toy: Toy) {

    this.toyservice.addToy(toy);
    console.log(this.toyservice.selectedList);
  }


}
