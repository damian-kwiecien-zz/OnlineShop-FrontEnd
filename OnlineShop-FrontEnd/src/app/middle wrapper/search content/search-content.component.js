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
var router_1 = require('@angular/router');
var product_service_1 = require('../shared/product.service');
var shopping_cart_service_1 = require('../../shared/shopping-cart.service');
var postman_service_1 = require('../../shared/postman.service');
require('rxjs/add/operator/take');
var SearchContentComponent = (function () {
    function SearchContentComponent(productService, postman, cartService, router, cd) {
        this.productService = productService;
        this.postman = postman;
        this.cartService = cartService;
        this.router = router;
        this.cd = cd;
        this.modalId = "searchModal";
        this.products = [];
        this.param = { searchParameter: '' };
        this.empty = true;
    }
    SearchContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postman.getSearchParam()
            .subscribe(function (param) { _this.param.searchParameter = param; _this.prepareProductsIds(); }, function (error) { _this.errorMessage = error; });
    };
    SearchContentComponent.prototype.addToCart = function (event) {
        this.cartService.addProduct(this.selectedProduct);
    };
    SearchContentComponent.prototype.raiseModal = function (product) {
        this.selectedProduct = product;
    };
    SearchContentComponent.prototype.concatProducts = function (event) {
        var body = document.body;
        if ((body.scrollTop + body.clientHeight) >= body.scrollHeight) {
            if (this.productsIds.length != 0) {
                body.scrollTop = body.scrollTop - (10 * body.scrollTop / 100);
                this.fillProducts(4);
            }
        }
    };
    SearchContentComponent.prototype.prepareProductsIds = function () {
        var _this = this;
        this.productService.getProductsIdsBy(this.param)
            .subscribe(function (ids) {
            _this.productsIds = ids;
            _this.fillProducts(8);
        }, function (error) { return _this.errorMessage = error; }, function () {
            if (_this.productsIds.length != 0)
                _this.empty = false;
            else
                _this.empty = true;
            _this.cd.detectChanges();
        });
    };
    SearchContentComponent.prototype.fillProducts = function (count) {
        var _this = this;
        if (this.productsIds.length == 0)
            return;
        if (this.productsIds.length < count)
            count = this.productsIds.length;
        var subIds = this.productsIds.splice(0, count);
        this.productService.getProductsBy(subIds)
            .subscribe(function (p) { _this.products = _this.products.concat(p); }, function (error) { _this.errorMessage = error; });
    };
    SearchContentComponent = __decorate([
        core_1.Component({
            selector: 'my-search-content',
            templateUrl: 'app/middle wrapper/search content/search-content.component.html',
            styles: ["\n  .container {\n          text-align: center;\n        }"],
            host: { '(window:scroll)': 'concatProducts(event)' },
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, postman_service_1.PostmanService, shopping_cart_service_1.ShoppingCartService, router_1.Router, core_1.ChangeDetectorRef])
    ], SearchContentComponent);
    return SearchContentComponent;
}());
exports.SearchContentComponent = SearchContentComponent;
//# sourceMappingURL=search-content.component.js.map