import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { PostmanService } from '../../shared/postman.service';

import { EmptyResultComponent } from '../shared/empty-result.component';
import 'rxjs/add/operator/take';

@Component({
  selector: 'my-search-content',
  templateUrl: 'app/middle wrapper/search content/search-content.component.html',
  styles: [`
  .container {
          text-align: center;
        }`],
  host: { '(window:scroll)': 'concatProducts(event)' },
  providers: [ProductService]
})
export class SearchContentComponent implements OnInit {
  products: Product[];
  productsIds: number[];
  selectedProduct: Product;
  empty: boolean;
    modalId: string = "searchModal";

  private param: { searchParameter: string };
  private errorMessage: any;

  constructor(private productService: ProductService, private postman: PostmanService, private cartService: ShoppingCartService, 
  private router: Router, private cd: ChangeDetectorRef) {
    this.products = [];
    this.param = { searchParameter: '' };
    this.empty = true;
  }

  ngOnInit() {
    this.postman.getSearchParam()
      .subscribe(
        (param: string) => { this.param.searchParameter = param; this.prepareProductsIds(); },
        error => { this.errorMessage = error as any; });
  }

  addToCart(event: any) {
    this.cartService.addProduct(this.selectedProduct);
  }

  raiseModal(product: Product) {
    this.selectedProduct = product;
  }

  concatProducts(event: Event) {
    let body = document.body;
    if ((body.scrollTop + body.clientHeight) >= body.scrollHeight) {
      if (this.productsIds.length != 0) {
        body.scrollTop = body.scrollTop - (10 * body.scrollTop / 100);
        this.fillProducts(4);
      }
    }
  }


  private prepareProductsIds() {
    this.productService.getProductsIdsBy(this.param)
      .subscribe(
      (ids: number[]) => {
        this.productsIds = ids;
        this.fillProducts(8); },
      error => this.errorMessage = <any>error,
      () => { 
        if (this.productsIds.length != 0)
          this.empty = false;
        else
          this.empty = true; 
        this.cd.detectChanges(); });
  }

  private fillProducts(count: number) {
    if (this.productsIds.length == 0)
      return;
      
    if (this.productsIds.length < count)
      count = this.productsIds.length;

    let subIds = this.productsIds.splice(0, count);
    this.productService.getProductsBy(subIds)
      .subscribe(
      (p: Product[]) => { this.products = this.products.concat(p); },
      error => { this.errorMessage = <any>error });
  }
}