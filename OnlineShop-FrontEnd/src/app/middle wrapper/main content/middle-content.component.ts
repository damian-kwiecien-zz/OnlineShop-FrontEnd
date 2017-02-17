import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Product } from '../shared/product';

import { ProductComponent } from '../product/product.component'

import { ProductService } from '../shared/product.service';

import { ShoppingCartItem } from '../../shared/shopping-cart-item';
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
  //styleUrls: ['app/products-middle-wrapper.component.css'],
  styles: [`
  .modal-content {
    padding: 20px;
    margin: 5%;
        }
  .modal-dialog {
    width: auto;
  }`],
  host: { '(window:scroll)': 'notifyScroll(event)' },
  providers: [ProductService]
})
export class MiddleContentComponent implements OnInit {
  public products: Product[];
  public productsIdList: number[];
  public selectedProduct: Product;
  public modalId: string = "mainModal";

  private paramWrapper: { target: string, category: string, type: string } = { target: '', category: '', type: ''};

  private errorMessage: any;

  constructor(private productService: ProductService, private router: Router, private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    

    this.router.events.filter(e => e instanceof NavigationEnd)
      .subscribe(
      (e: NavigationEnd) => {
        this.prepareQueryString();
        this.prepareProductsIdList();
      },
      error => { this.errorMessage = <any>error });
  }

  addToCart(event: any) {
    this.cartService.addItem(this.selectedProduct);
  }

  private prepareQueryString(): void {
    let urlTab = this.router.url.split("/");
    this.paramWrapper.target = urlTab[1];;
    this.paramWrapper.category = urlTab[2];
    this.paramWrapper.type = urlTab[3];
  }

  private prepareProductsIdList(): void {
    this.productService.getProductsIdListBy(this.paramWrapper)
      .subscribe(
      (list: number[]) => { 
          this.productsIdList = list
                 this.emptyProducts();
        this.fillProducts(6);
      },
      error => this.errorMessage = <any>error);

      
  }

  private emptyProducts(): void {
    this.products = [];
  }
  
  private fillProducts(maxCount: number = 6): void {
    let iterationCount = 0;

    for (let id of this.productsIdList) {

      if (iterationCount == maxCount)
        break;

      this.productService.getProductBy(id)
        .subscribe(
        (p: Product[]) => { this.products = this.products.concat(p); },
        error => { this.errorMessage = <any>error });

      ++iterationCount;
    }
    for(let i = 0; i < iterationCount; ++i) {
      this.productsIdList.shift();
    }
    
  }

  raiseModal(product: Product): void {
    this.selectedProduct = product;
  }

  notifyScroll(event: Event) {
    let body = document.body;
    if ((body.scrollTop + body.clientHeight) >= body.scrollHeight) {
      if(this.products != []) {
        body.scrollTop = body.scrollTop - (10 * body.scrollTop / 100);
      this.fillProducts(3);
      }
      
    }
  }
}