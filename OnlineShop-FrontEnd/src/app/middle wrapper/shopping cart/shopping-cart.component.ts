import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

import { ShoppingCartItem } from '../../shared/shopping-cart-item';
import { ShoppingCartService } from '../../core/shopping-cart.service';


@Component({
  selector: 'my-shopping-cart',
  templateUrl: 'app/middle wrapper/shopping cart/shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  cartItems: ShoppingCartItem[];
  subtotalPrice: number;
  shipping: number = 5;

  constructor(private cartService: ShoppingCartService) {
    this.subtotalPrice = 0;
  }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.prepareSubtotalPrice();
  }

  removeItem(item: ShoppingCartItem) {
    this.cartService.removeItemBy(item.id);
    this.cartItems = this.cartService.getItems();
    this.prepareSubtotalPrice();
  }

  increaseQuantity(item: ShoppingCartItem, event: any) {
    ++event.target.nextElementSibling.nextElementSibling.value;
    this.cartService.addProduct({ productId: item.id });
    this.cartItems = this.cartService.getItems();
    this.prepareSubtotalPrice();
  }
  decreaseQuantity(item: ShoppingCartItem, event: any) {
    --event.target.nextElementSibling.value;
    this.cartService.removeItemBy(item.id)
    this.cartItems = this.cartService.getItems();
    this.prepareSubtotalPrice();
  }
  
  private prepareSubtotalPrice() {
    for (let it of this.cartItems) {
      this.subtotalPrice += it.price * it.quantity;
    }
  }

}









