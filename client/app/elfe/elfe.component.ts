import { Component, OnInit } from '@angular/core';
import { ToyService } from '../services/toy.service';

@Component({
  selector: 'app-elfe',
  templateUrl: './elfe.component.html',
  styleUrls: ['./elfe.component.scss']
})
export class ElfeComponent implements OnInit {

  constructor(private toyService: ToyService) { }

  ngOnInit() {
  }

}
