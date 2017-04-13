import { Injectable } from '@angular/core';
import { ShoppingCartItem } from '../shared/shopping-cart-item'

import { Product } from '../middle wrapper/shared/product';
import { Observable, } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/Rx';

@Injectable()
export class ShoppingCartService {

  private _empty: boolean;

  // Sources
  productAddedSource = new Subject<number>();
  productRemovedSource = new Subject<number>();

  // Streams
  public productAdded$: Observable<number>;
  public productRemoved$: Observable<number>;

  get empty(): boolean {
    if (this.getItems().length == 0) {
      return true;
    }
    else
      return false;
  }

  constructor() {
    this.productAdded$ = this.productAddedSource.asObservable();
    this.productRemoved$ = this.productRemovedSource.asObservable();
    this._empty = true;

    localStorage.setItem('shoppingCartItems', '[]');
  }

  getItems(): ShoppingCartItem[] {
    return JSON.parse(localStorage.getItem('shoppingCartItems')) as ShoppingCartItem[] || []
  }
  addProduct(product: Object);
  addProduct(product: Product);
  addProduct(id: number);
  addProduct(arg: any) {
    if (Object.keys(arg).sort().join() === "Category,Description,Details,Id,Name,Price,ProductImages,Target,Type")
      this.addProduct_1(arg as Product);
    else
      this.addProduct_2(arg as { productId: number });

  }

  private addProduct_1(param: Product) {
    let cartItems = this.getItems();
    let i = cartItems.findIndex(item => item.id == param.id);

    // Means item not found, so we create one
    if (i == -1) {
      let cartItem = this.createItem(param);
      cartItems.push(cartItem);
      this.setItems(cartItems);
    }
    // Means item exist, so we increase quantity of duplicate
    else {
      ++(cartItems[i].quantity);
      this.setItems(cartItems);
    }
    this.emitProductAddedEvent(param.price);
  }

  private addProduct_2(param: { productId: number }) {
    let cartItems = this.getItems();
    let i = cartItems.findIndex(item => item.id == param.productId);
    // i == -1 throw error
    ++(cartItems[i].quantity);
    this.setItems(cartItems);
    this.emitProductAddedEvent(cartItems[i].price);
  }

  removeItemBy(id: number) {
    let cartItems = this.getItems();
    let i = cartItems.findIndex(item => item.id == id);

    if (cartItems[i].quantity == 1) {
      this.emitProductRemovedEvent(cartItems[i].price);

      cartItems.splice(i, 1);
      this.setItems(cartItems);
    }
    else {
      --cartItems[i].quantity;
      this.setItems(cartItems);

      this.emitProductRemovedEvent(cartItems[i].price);
    }
  }

  private createItem(product: Product): ShoppingCartItem {
    return new ShoppingCartItem(
      product.id,
      product.name,
      product.price,
      1,
      product.imgUrl);
  }

  private setItems(cartItems: ShoppingCartItem[]): void {
    localStorage.setItem('shoppingCartItems', JSON.stringify(cartItems));
  }

  private emitProductAddedEvent(price: number): void {
    this.productAddedSource.next(price);
  }

  private emitProductRemovedEvent(price: number): void {
    this.productRemovedSource.next(price);
  }


}
