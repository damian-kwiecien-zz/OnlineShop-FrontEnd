import { Component } from '@angular/core';
import { ShoppingCartService } from './shared/shopping-cart.service';
import { AccountService } from './core/account.service';
import { PostmanService } from './shared/postman.service';

@Component({
  selector: 'my-app',
  template: `
  <my-top-wrapper></my-top-wrapper>
  <my-middle-wrapper></my-middle-wrapper>
  <my-bottom-wrapper></my-bottom-wrapper>`,
  styles: [`
  :host-context(html, body) {
    height: 100%;
    width: 100%;
  }`],
  providers: [ShoppingCartService, AccountService, PostmanService]
})
export class AppComponent { }
