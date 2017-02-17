import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../core/account.service';
import { ProductService } from '../middle wrapper/shared/product.service';
import { ShoppingCartService } from '../core/shopping-cart.service';

import { Product } from '../middle wrapper/shared/product';
import { ShoppingCartItem } from '../shared/shopping-cart-item';

@Component({
  selector: 'my-top-wrapper',
  templateUrl: 'app/top wrapper/top-wrapper.component.html',
  styleUrls: ['app/top wrapper/top-wrapper.component.css'],
  providers: [ProductService]
})
export class TopWrapperComponent implements OnInit {
  public paramWrapper: { searchParameter: string } = { searchParameter: '' };
  public cartItemsCount: number = 0;
  public cartPrice: number = 0;

  constructor(private accountService: AccountService, private router: Router, private cartService: ShoppingCartService) {

  }

  ngOnInit(): void {
    //// JQUERY CODE
    // Resizes main navbar header to proper size
    //$('.navbar').find('.navbar-header').css('height', $('.navbar').innerHeight());
    // Resizes main navbar right part to proper size
    //$('.navbar').find('.navbar-right').css('height', $('.navbar').innerHeight());
    $('#myCarousel').carousel({
      pause: 'null',
      interval: 3000
    })

    this.subscribeForItemAddedEvents();
    this.subscribeForItemRemovedEvents();
  }

  private subscribeForItemAddedEvents() {
    this.cartService.itemAdded$.subscribe(
      (item: ShoppingCartItem) => {
        ++this.cartItemsCount;
        this.cartPrice += item.price;});
  }

  private subscribeForItemRemovedEvents() {
    this.cartService.itemRemoved$.subscribe(
      (item: ShoppingCartItem) => {
        --this.cartItemsCount;
        this.cartPrice -= item.price;
        console.log(item);});
  }


  logout(event: any) {
    this.accountService.logout();
  }

  search() {
    sessionStorage.setItem('searchParamWrapper', JSON.stringify(this.paramWrapper));
    this.router.navigateByUrl('/search');
  }
}