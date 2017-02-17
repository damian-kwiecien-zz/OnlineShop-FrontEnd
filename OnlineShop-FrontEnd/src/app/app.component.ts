import { Component } from '@angular/core';
import { ShoppingCartService } from './core/shopping-cart.service';
import { AccountService } from './core/account.service';

@Component({
  selector: 'my-app',
  template: `
  <my-top-wrapper></my-top-wrapper>
  <router-outlet></router-outlet>
  <my-bottom-wrapper></my-bottom-wrapper>`,
  styles: [`
  :host-context(html, body) {
    height: 100%;
    width: 100%;
  }`],
  providers: [ShoppingCartService, AccountService]
})
export class AppComponent { }
