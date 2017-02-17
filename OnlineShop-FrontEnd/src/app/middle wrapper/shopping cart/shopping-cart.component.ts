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
  public cartItems: ShoppingCartItem[];
  public subtotalPrice: number;
  public shipping: number = 5;
  //public empty = true;


  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.prepareSubtotalPrice();

    /*
    if(this.cartItems.length == 0)
      this.empty = true;
    else
    this.empty = false;
    */
  }

  private prepareSubtotalPrice(){
      this.subtotalPrice = 0;
    for(let it of this.cartItems) {
      this.subtotalPrice += it.price;
    }
  }
  
  removeItem(item: ShoppingCartItem) {
    this.cartService.removeItemBy(item.id);

    this.cartItems = this.cartService.getItems();
  }

  increaseQuantity(item: ShoppingCartItem, event: any) {
    ++event.target.nextElementSibling.nextElementSibling.value;
    let prod = new Product();
    prod.Id = item.id;
    prod.ImgUrl = item.imgUrl;
    prod.Name = item.name;
    prod.Price = item.price;
    this.cartService.addItem(prod);
    this.cartItems = this.cartService.getItems();
  }
    decreaseQuantity(item: ShoppingCartItem, event: any) {
    --event.target.nextElementSibling.value;
    let prod = new Product();
    prod.Id = item.id;
    prod.ImgUrl = item.imgUrl;
    prod.Name = item.name;
    prod.Price = item.price;
    this.cartService.removeItemBy(item.id)
    this.cartItems = this.cartService.getItems();
    /*
    if(this.cartItems.length == 0)
      this.empty = true;
    else
    this.empty = false;
    */
  }
}









