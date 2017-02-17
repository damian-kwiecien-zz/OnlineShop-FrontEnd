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
var ProductService = (function () {
    function ProductService(httpService) {
        this.httpService = httpService;
        this.leftUrl = 'http://localhost:54254/api/products';
        this.newProductsLeftUrl = 'http://localhost:54254/api/products/new';
        this.bestProductsLeftUrl = 'http://localhost:54254/api/products/best';
    }
    ProductService.prototype.getProductsIdList = function () {
        var url = this.leftUrl;
        return this.httpService.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.getProductsIdListBy = function (paramWrapper) {
        // Jquery
        var queryString = $.param(paramWrapper);
        var url = this.leftUrl.concat('/?').concat(queryString);
        return this.httpService.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.getProductBy = function (id) {
        var url = this.leftUrl.concat('/').concat(id.toString());
        return this.httpService.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.getNewProducts = function () {
        return this.httpService.get(this.newProductsLeftUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.getBestProducts = function () {
        return this.httpService.get(this.bestProductsLeftUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
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
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map