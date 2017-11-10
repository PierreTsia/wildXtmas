import { Component, OnInit } from '@angular/core';
import { KIDS } from '../models/kidmodels';
import { KidService } from '../services/kid.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  //scanned = false;
  kids = KIDS;
  values = '';



  onKey(event: any) {
    this.values = event.target.value;
    console.log(this.values)
  }
  onScan() {
    this.kidService.scanMethod();
    console.log(this.kids)
  }
  constructor(public kidService:KidService) { }

  ngOnInit() {

  }

}
