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
var product_service_1 = require('../shared/product.service');
var shopping_cart_service_1 = require('../../shared/shopping-cart.service');
require('rxjs/add/operator/take');
var HomeMiddleContentComponent = (function () {
    function HomeMiddleContentComponent(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.modalId = "homeModal";
    }
    HomeMiddleContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getNewProducts().take(3)
            .subscribe(function (list) { _this.newProducts = list; }, function (error) { return _this.errorMessage = error; });
        this.productService.getBestProducts().take(3)
            .subscribe(function (list) { _this.bestProducts = list; }, function (error) { return _this.errorMessage = error; });
    };
    HomeMiddleContentComponent.prototype.addToCart = function (event) {
        this.cartService.addProduct(this.selectedProduct);
    };
    HomeMiddleContentComponent.prototype.raiseModal = function (product) {
        this.selectedProduct = product;
    };
    HomeMiddleContentComponent = __decorate([
        core_1.Component({
            selector: 'my-home-middle-content',
            templateUrl: 'app/middle wrapper/home content/home-middle-content.component.html',
            styles: ["\n  .page-header {\n    margin-bottom: 3%;\n  }\n  .caption > p ,\n  .caption > h3 {\n    text-align: center;\n  }\n"],
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, shopping_cart_service_1.ShoppingCartService])
    ], HomeMiddleContentComponent);
    return HomeMiddleContentComponent;
}());
exports.HomeMiddleContentComponent = HomeMiddleContentComponent;
//# sourceMappingURL=home-middle-content.component.js.map