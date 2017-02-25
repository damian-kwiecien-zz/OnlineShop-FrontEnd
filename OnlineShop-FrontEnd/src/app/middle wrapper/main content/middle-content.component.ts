import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Product } from '../shared/product';

import { ProductComponent } from '../product/product.component'

import { ProductService } from '../shared/product.service';
import { ShoppingCartService } from '../../core/shopping-cart.service';

@Component({
  selector: 'my-middle-content',
  template: `
     <div class="container">
    <div class="row">
      <div class="col-sm-3 col-md-3">
        <my-sidebar>Loading...</my-sidebar>
      </div>
      <main class="col-sm-9 col-md-9 right">
        <div class="page-header">
          <h1>Lista Produktów</h1>
        </div>
        <div *ngFor="let p of products"
          class="col-sm-6 col-md-4">
          <my-product [product]="p" [id]="modalId" (selectProduct)='raiseModal($event)'> </my-product>
    </div>
    </main>
  </div>
  </div>
  
  <my-product-modal [id]="modalId" [product]="selectedProduct"></my-product-modal>`,
  styles: [`
  .modal-content {
    padding: 20px;
    margin: 5%;
        }
  .modal-dialog {
    width: auto;
  }`],
  host: { '(window:scroll)': 'concatProducts(event)' },
  providers: [ProductService]
})
export class MiddleContentComponent implements OnInit {
  products: Product[];
  productsIds: number[];
  selectedProduct: Product;
  modalId: string = "mainModal";

  private params: { target: string, category: string, type: string };
  private errorMessage: any;

  constructor(private productService: ProductService, private router: Router, private cartService: ShoppingCartService) {
    this.params = { target: '', category: '', type: '' };
    this.products = [];
  }

  ngOnInit() {
    this.router.events.filter(e => e instanceof NavigationEnd)
      .subscribe(
      (e: NavigationEnd) => {
        this.prepareParams();
        this.prepareProductsIds();
      },
      error => { this.errorMessage = <any>error });
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
        this.fillProducts(3);
      }

    }
  }

  private prepareParams() {
    let urlTab = this.router.url.split("/");
    this.params.target = urlTab[1];;
    this.params.category = urlTab[2];
    this.params.type = urlTab[3];
  }

  private prepareProductsIds() {
    this.productService.getProductsIdsBy(this.params)
      .subscribe(
      (ids: number[]) => {
        this.productsIds = ids
        this.fillProducts(6);
      },
      error => this.errorMessage = <any>error);
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