import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../core/account.service';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { PostmanService } from '../shared/postman.service';

@Component({
  selector: 'my-top-wrapper',
  templateUrl: 'app/top wrapper/top-wrapper.component.html',
  styleUrls: ['app/top wrapper/top-wrapper.component.css']
})
export class TopWrapperComponent implements OnInit {
  param: { searchParameter: string };
  cartCount: number;
  cartPrice: number;

  constructor(private accountService: AccountService, private postman: PostmanService, private router: Router,
    private cartService: ShoppingCartService) {
    this.cartCount = 0;
    this.cartPrice = 0;
    this.param = { searchParameter: '' };
  }

  ngOnInit() {
    //// JQUERY CODE
    // Resizes main navbar header to proper size
    $('.navbar').find('.navbar-header').css('height', $('.navbar').innerHeight());
    // Resizes main navbar right part to proper size
    $('.navbar').find('.navbar-right').css('height', $('.navbar').innerHeight());
    // Resizes shopping cart part to proper size
    $('.navbar-right').find('.shopping-cart').css('width', $('.navbar-right').innerHeight());
    $('#myCarousel').carousel({
      pause: 'null',
      interval: 3000
    })

    this.subscribeForProductAddedEvents();
    this.subscribeForProductRemovedEvents();
  }

  search() {
    this.postman.sendSearchParam(this.param.searchParameter);
    this.router.navigateByUrl('/search');
  }

  logout(event: any) {
    this.accountService.logout();
  }

  private subscribeForProductAddedEvents() {
    this.cartService.productAdded$.subscribe(
      (price: number) => {
        ++this.cartCount;
        this.cartPrice += price;
      });
  }

  private subscribeForProductRemovedEvents() {
    this.cartService.productRemoved$.subscribe(
      (price: number) => {
        --this.cartCount;
        this.cartPrice -= price;
      });
  }
}