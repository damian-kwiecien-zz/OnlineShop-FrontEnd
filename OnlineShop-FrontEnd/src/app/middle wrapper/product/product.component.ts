import { Component, OnInit, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';
import { ShoppingCartService } from '../../core/shopping-cart.service';

import { ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'my-product',
  template:`
  <div class="thumbnail">
        <img src="{{ product?.ImgUrl }}" alt="..." data-toggle="modal" [attr.data-target]="'#'+id" (click)="sendProductToParent()">
        <div class="caption">
          <h3>{{ product?.Name }}</h3>
          <p>{{ product?.Price }}</p>
          <p><button (click)="addToCart($event)" class="btn btn-primary" role="button">Add To Cart</button></p>
        </div>
      </div>`
})
export class ProductComponent {
  @Input() product: Product;
  @Input() id: string;
  @Output() selectProduct: EventEmitter<Product> = new EventEmitter<Product>();

  @ViewChild('injectionOutlet', { read: ViewContainerRef }) injectionOutlet: ViewContainerRef;

  constructor(private thumbnailService: ProductService, private router: Router,
    private cartService: ShoppingCartService) { }

    addToCart(event: any) {
      this.cartService.addItem(this.product);
    }

  sendProductToParent() {
    this.selectProduct.emit(this.product);
  }

}







