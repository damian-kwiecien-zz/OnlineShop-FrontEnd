import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/take';

import { Product } from './product';

@Injectable()
export class ProductService {
  private leftUrl: string = 'http://localhost:54254/api/products';
  private newProductsLeftUrl = 'http://localhost:54254/api/products/new';
  private bestProductsLeftUrl = 'http://localhost:54254/api/products/best';

  constructor(private httpService: Http) { }

  public getProductsIdList(): Observable<number[]> {
    let url = this.leftUrl;
    return this.httpService.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }
  public getProductsIdListBy(paramWrapper: { target: string, category: string, type: string} | { searchParameter: string }): Observable<number[]> {
    // Jquery
    let queryString = $.param(paramWrapper);

    let url = this.leftUrl.concat('/?').concat(queryString);
    return this.httpService.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getProductBy(id: number): Observable<Product[]> {
    let url = this.leftUrl.concat('/').concat(id.toString());
    return this.httpService.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getNewProducts(): Observable<Product[]> {
    return this.httpService.get(this.newProductsLeftUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getBestProducts(): Observable<Product[]> {
    return this.httpService.get(this.bestProductsLeftUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}