import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, } from 'rxjs/Observable';

import { ShoppingCartItem } from '../shared/shopping-cart-item'

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/take';
import 'rxjs/Rx';


import { Product } from '../middle wrapper/shared/product';
import {Observer} from 'rxjs/Observer';
import {Subject} from 'rxjs/Subject';
import {} from 'rxjs/Operator'
@Injectable()
export class ShoppingCartService {
  private _empty: boolean = true;
  get empty(): boolean {
    let cartItems = this.getItems();

    // Shopping Cart is not empty when exist and has lenght != 0
    if (cartItems && cartItems.length != 0) {
      return false;
    }
    else
      return true;
  }
  
  // Sources
   itemAddedSource = new Subject<ShoppingCartItem>();
   itemRemovedSource = new Subject<ShoppingCartItem>();

  // Streams
  public itemAdded$: Observable<ShoppingCartItem>;
  public itemRemoved$: Observable<ShoppingCartItem>;

  constructor(private httpService: Http) { 
    this.itemAdded$ = this.itemAddedSource.asObservable();
    this.itemRemoved$ = this.itemRemovedSource.asObservable();
  }

  public addItem(product: Product) {
    let cartItems = this.getItems();
    
    // Shopping Cart is not empty
    if (!this.empty) {

      let result = cartItems.findIndex(item => item.id == product.Id);
      // Mean object not found, so we create one
      if (result == -1) {
        let cartItem = this.createItem(product);
        cartItems.push(cartItem);
        this.saveItemsToSessionStorage(cartItems);

        this.emitItemAddedEvent(cartItem);
      }
      // Mean object exist, so we increase quantity of duplicate
      else{
        ++(cartItems[result].quantity);
        this.saveItemsToSessionStorage(cartItems);

        this.emitItemAddedEvent(cartItems[result]);
      }   
    }
    else {
        let cartItem = this.createItem(product);
        cartItems.push(cartItem);
        this.saveItemsToSessionStorage(cartItems);

        this.emitItemAddedEvent(cartItem);
    }
  }

  public removeItemBy(id: number): void {
    let cartItems = this.getItems();
    let i = cartItems.findIndex(item => item.id == id);

    if(i == -1)
      return; /*TO DO: error handling here */

    if(cartItems[i].quantity == 1) {
      this.emitItemRemovedEvent(cartItems[i]);

      cartItems.splice(i, 1);
      this.saveItemsToSessionStorage(cartItems);
    }
    else {
      --cartItems[i].quantity;
      this.saveItemsToSessionStorage(cartItems);

      this.emitItemRemovedEvent(cartItems[i]);
    }
  }

  public getItems(): ShoppingCartItem[] {
    let stringCartItems = sessionStorage.getItem('shoppingCartItems');
    let cartItems = <ShoppingCartItem[]>JSON.parse(stringCartItems);
    return cartItems || [];
  }

  private createItem(product: Product): ShoppingCartItem {
     let cartItem = new ShoppingCartItem();

       cartItem.id = product.Id;
        cartItem.name = product.Name;
        cartItem.imgUrl = product.ImgUrl;
        cartItem.price = product.Price;
        cartItem.quantity = 1;
        return cartItem;
  }

  private saveItemsToSessionStorage(cartItems: ShoppingCartItem[]): void {
    sessionStorage.setItem('shoppingCartItems', JSON.stringify(cartItems));
  }

  private emitItemAddedEvent(cartItem: ShoppingCartItem): void {
    this.itemAddedSource.next(cartItem);
  }

  private emitItemRemovedEvent(cartItem: ShoppingCartItem): void {
    this.itemRemovedSource.next(cartItem);
  }


}