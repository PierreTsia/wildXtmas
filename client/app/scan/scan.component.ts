import { Component, OnInit } from '@angular/core';
import { KIDS } from '../models/kidmodels';
import { KidService } from '../services/kid.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  kids = KIDS;
  
  constructor(public kidService: KidService) { }


  onKey(event: any) {
    this.kidService.values = event.target.value;
    console.log(this.kidService.values)
  }
  onScan() {
    this.kidService.scanMethod();

  }
  

  ngOnInit() {

  }

}
