import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { EmptyResultComponent } from '../shared/empty-result.component';
import 'rxjs/add/operator/take';

@Component({
  selector: 'my-search-content',
  template: `
<my-empty-result *ngIf="empty"></my-empty-result>

 <main *ngIf="!empty" class="container">
        <div class="page-header">
          <h1>Lista Produktów</h1>
        </div>
        <div *ngFor="let p of products"
          class="col-sm-6 col-md-3">
          <my-product [product]="p" (selectProduct)='raiseModal($event)'> </my-product>
    </div>
    </main>
  
  

  <!-- Modal, displays when user chose particular product -->
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div class="row">
          <div class="col-md-4">
            <img src="{{ selectedProduct?.ImgUrl }}" class="img-responsive thumbnail" alt="Cinque Terre">
          </div>
          <div class="col-md-8">
            <div class="page-header">
              <h2>{{ selectedProduct?.Name }}
                <br>
                <span class="label label-warning">Hot</span>  <small>{{ selectedProduct?.Price }}$</small></h2>
            </div>

            <h3 class="product-rating"><i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i>              <i class="fa fa-star-o"></i>
            </h3>
            <div class="panel-group" id="productAccordion" role="tablist" aria-multiselectable="true">
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="productHeadingOne">
                  <h4 class="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#productAccordion" href="#productCollapseOne" aria-expanded="true" aria-controls="productCollapseOne">
          Description
        </a>
                  </h4>
                </div>
                <div id="productCollapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="productHeadingOne">
                  <div class="panel-body">
                    {{ selectedProduct?.Description }}
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="productHeadingTwo">
                  <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#productAccordion" href="#productCollapseTwo" aria-expanded="false"
                      aria-controls="productCollapseTwo">
                      Details
                      </a>
                  </h4>
                </div>
                <div id="productCollapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="productHeadingTwo">
                  <div class="panel-body">
                    {{ selectedProduct?.Details }}
                  </div>
                </div>
              </div>
            </div>

            <div (click)="addToCart($event)" class="btn-group cart">
              <button type="button" class="btn btn-success">
							Add to cart 
						</button>
            </div>
            <div (click)="addToCart($event)" class="btn-group wishlist">
              <button type="button" class="btn btn-danger">
							Add to wishlist 
						</button>
            </div>
          </div>
        </div>`,
  styles: [`
  .container {
          text-align: center;
        }`],
  providers: [ProductService]
})
export class SearchContentComponent implements OnInit {
  public products: Product[] = [];
  public productsIdList: number[];
  public selectedProduct: Product;
  public empty = true;

  private paramWrapper: { searchParameter: string } = { searchParameter: '' };

  private errorMessage: any;

  constructor(private productService: ProductService, private router: Router, private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    
        this.prepareParamWrapper();
        this.prepareProductsIdList();
  }

  addToCart(event: any) {
    this.cartService.addItem(this.selectedProduct);
  }

  private prepareParamWrapper(): void {
    this.paramWrapper = JSON.parse(sessionStorage.getItem('searchParamWrapper'));
  }

  private prepareProductsIdList(): void {
    this.productService.getProductsIdListBy(this.paramWrapper)
      .subscribe(
      (list: number[]) => { 
          this.productsIdList = list
                 this.emptyProducts();
        this.fillProducts(8);
      },
      error => this.errorMessage = <any>error);

      
  }

  private emptyProducts(): void {
    this.products = [];
  }
  
  private fillProducts(maxCount: number = 8): void {
    let iterationCount = 0;

    for (let id of this.productsIdList) {

      if (iterationCount == maxCount)
        break;

      this.productService.getProductBy(id)
        .subscribe(
        (p: Product[]) => { this.products = this.products.concat(p); },
        error => { this.errorMessage = <any>error },
        () => { if(this.productsIdList.length == 0)
          this.empty = true;
        else
          this.empty = false; });

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
      this.fillProducts(4);
      }
      
    }
  }
}