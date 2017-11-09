import { Injectable } from '@angular/core';
import { TOYS } from '../models/toymodels';
import { KIDS } from '../models/kidmodels';

@Injectable()
export class ToyService {

  toys = TOYS;
  kids = KIDS;

  constructor() { }

  

}
