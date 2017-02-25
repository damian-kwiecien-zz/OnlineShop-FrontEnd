import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product.service';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { ProductComponent } from '../product/product.component'
import { ProductModalComponent } from '../shared/product-modal.component'
import { Product } from '../shared/product';

import 'rxjs/add/operator/take';

@Component({
  selector: 'my-home-middle-content',
  templateUrl: 'app/middle wrapper/home content/home-middle-content.component.html',
  styles: [`
  .page-header {
    margin-bottom: 3%;
  }
  .caption > p ,
  .caption > h3 {
    text-align: center;
  }
`],
  providers: [ProductService]
})
export class HomeMiddleContentComponent implements OnInit {
  newProducts: Product[];
  bestProducts: Product[];
  selectedProduct: Product;
  modalId: string = "homeModal";
  
  private errorMessage: any;

  constructor(private productService: ProductService, private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productService.getNewProducts().take(3)
      .subscribe(
      (list: Product[]) => { this.newProducts = list; },
      error => this.errorMessage = <any>error);

    this.productService.getBestProducts().take(3)
      .subscribe(
      (list: Product[]) => { this.bestProducts = list; },
      error => this.errorMessage = <any>error);
  }

  addToCart(event: any) {
    this.cartService.addProduct(this.selectedProduct);
  }
      raiseModal(product: Product) {
    this.selectedProduct = product;
  }

}