import { Component, OnInit, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';
import { ShoppingCartService } from '../../shared/shopping-cart.service';

@Component({
  selector: 'my-product',
  template: `
  <div class="thumbnail">
        <img class="img-responsive" src="{{ product?.imagesUrl[0] }}" alt="Image not found" data-toggle="modal" [attr.data-target]="'#'+id" (click)="sendProductToParent()">
        <div class="caption">
          <h3>{{ product?.name }}</h3>
          <p>{{ product?.price }}</p>
          <p><button (click)="addToCart($event)" class="btn btn-danger" role="button">Add To Cart</button></p>
        </div>
      </div>`,
  styles: [`
        img {
    height: 40vh;
   }
   .caption {
     text-align: center;
   }`]
})
export class ProductComponent {
  @Input() product: Product;
  @Input() id: string;
  @Output() selectProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private cartService: ShoppingCartService) { }

  addToCart(event: any) {
    this.cartService.addProduct(this.product);
  }

  sendProductToParent() {
    this.selectProduct.emit(this.product);
  }

}







