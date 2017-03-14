import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PurchaseComponent } from './purchase.component';
import { ShoppingCartComponent } from './shopping cart/shopping-cart.component';
import { PurchaserComponent } from './purchaser/purchaser.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { EmptyResultComponent } from '../shared/empty-result.component';


const routes: Routes = [{
  path: 'purchase',
  component: PurchaseComponent,
  children: [{
    path: 'cart',
    component: ShoppingCartComponent
  },
  {
    path: 'purchaser',
    component: PurchaserComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  }]
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [PurchaseComponent, ShoppingCartComponent, PurchaserComponent, ConfirmationComponent,
    EmptyResultComponent]
})
export class PurchaseModule { }