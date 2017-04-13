"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/operator/take');
var app_settings_1 = require('../../app.settings');
var product_1 = require('./product');
var ProductService = (function () {
    function ProductService(httpService) {
        this.httpService = httpService;
    }
    ProductService.prototype.getProductsIdsBy = function (arg) {
        // Jquery
        var queryString = $.param(arg);
        var url = app_settings_1.AppSettings.API_ENDPOINT + '/api/product/ids/?' + queryString;
        return this.httpService.get(url)
            .map(this.extractDatas)
            .catch(this.handleError);
    };
    ProductService.prototype.getProductBy = function (id) {
        var url = app_settings_1.AppSettings.API_ENDPOINT + '/api/product/' + id.toString();
        return this.httpService.get(url)
            .map(this.extractProduct)
            .catch(this.handleError);
    };
    ProductService.prototype.getProductsBy = function (ids) {
        var url = app_settings_1.AppSettings.API_ENDPOINT + '/api/product/?ids=' + ids.toString();
        return this.httpService.get(url)
            .map(this.extractProducts)
            .catch(this.handleError);
    };
    ProductService.prototype.getNewProducts = function () {
        return this.httpService.get(app_settings_1.AppSettings.API_ENDPOINT + '/api/product/new')
            .map(this.extractProducts)
            .catch(this.handleError);
    };
    ProductService.prototype.getBestProducts = function () {
        return this.httpService.get(app_settings_1.AppSettings.API_ENDPOINT + '/api/product/best')
            .map(this.extractProducts)
            .catch(this.handleError);
    };
    ProductService.prototype.extractProduct = function (res) {
        var dto = res.json();
        // TO DO: replace it by some libary
        var p = new product_1.Product();
        p.id = dto.Id;
        p.name = dto.Name;
        p.description = dto.Description;
        p.details = dto.Details;
        p.imagesUrl = dto.ImagesUrl;
        p.price = dto.Price;
        p.category = dto.Category;
        p.target = dto.Target;
        p.type = dto.Type;
        return p || {};
    };
    ProductService.prototype.extractProducts = function (res) {
        var dtos = res.json();
        // TO DO: replace it by some libary
        var ps = new Array();
        for (var _i = 0, dtos_1 = dtos; _i < dtos_1.length; _i++) {
            var dto = dtos_1[_i];
            var p = new product_1.Product();
            p.id = dto.Id;
            p.name = dto.Name;
            p.description = dto.Description;
            p.details = dto.Details;
            p.imagesUrl = dto.ImagesUrl;
            p.price = dto.Price;
            p.category = dto.Category;
            p.target = dto.Target;
            p.type = dto.Type;
            ps.push(p);
        }
        return ps || [];
    };
    ProductService.prototype.extractDatas = function (res) {
        return res.json() || [];
    };
    ProductService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ProductService.prototype.lowerJSONKeysFirstLetter = function (json) {
        return json.replace(/"(.)[\w]+":/g, function ($0) {
            return $0.substr(1, 1).toLowerCase() + $0.substr(2);
        });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
/*
var json='{"ID":1234, ".oNTENT":"HELLO"}';
document.write(json.replace(/"(.)[\w]+":/g, function($0){
$0 = $0.substr(1, 1).toLowerCase()  + $0.substr(2);

return $0 }));
 
*/
/*
  public getProductBy(paramWrapper: { id: number } | { idList: number[] }): Observable<Product[]> {
      if (this.compareKeys(paramWrapper, ['id']))
        this.getProductById(paramWrapper);
      else if (this.compareKeys(paramWrapper, ['idList']))
        this.getProductByIdList(paramWrapper);
  
      let url = this.leftUrl.concat('/').concat(id.toString());
      return this.httpService.get(url)
        .map(this.extractData)
        .catch(this.handleError);
    }
  */
/*
 private compareKeys(first: Object, keys: string[]): boolean {
   let firstKeys = Object.keys(first).sort();
   let secondKeys = keys.sort();
   return JSON.stringify(firstKeys) === JSON.stringify(keys.sort());
 }
*/ 
//# sourceMappingURL=product.service.js.map