import { Component, OnInit } from '@angular/core';
import { KidService } from '../services/kid.service';
import { ToyService } from '../services/toy.service';


@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.scss']
})
export class KidComponent implements OnInit {

  constructor(public kidService: KidService, public toyService: ToyService) { }

  ngOnInit() {
  }

}
