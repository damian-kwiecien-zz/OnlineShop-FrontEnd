import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product.service';
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
  }`],
  providers: [ProductService]
})
export class HomeMiddleContentComponent implements OnInit {
  public newProducts: Product[];
  public bestProducts: Product[];
  private errorMessage: any;


  constructor(private productService: ProductService) { }

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
}