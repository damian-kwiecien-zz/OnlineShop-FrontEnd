import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaserData } from '../shared/purchaser-data';

@Component({
  selector: 'my-purchaser',
  templateUrl: 'app/middle wrapper/purchase/purchaser/purchaser.component.html'
})
export class PurchaserComponent {
  purchaserData: PurchaserData;

  constructor() {
    this.purchaserData = new PurchaserData();
  }
}
