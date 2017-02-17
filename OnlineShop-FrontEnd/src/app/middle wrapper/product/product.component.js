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
var product_1 = require('../shared/product');
var shopping_cart_service_1 = require('../../core/shopping-cart.service');
var core_2 = require('@angular/core');
var ProductComponent = (function () {
    function ProductComponent(thumbnailService, router, cartService) {
        this.thumbnailService = thumbnailService;
        this.router = router;
        this.cartService = cartService;
        this.selectProduct = new core_1.EventEmitter();
    }
    ProductComponent.prototype.addToCart = function (event) {
        this.cartService.addItem(this.product);
    };
    ProductComponent.prototype.sendProductToParent = function () {
        this.selectProduct.emit(this.product);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ProductComponent.prototype, "product", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ProductComponent.prototype, "id", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductComponent.prototype, "selectProduct", void 0);
    __decorate([
        core_2.ViewChild('injectionOutlet', { read: core_2.ViewContainerRef }), 
        __metadata('design:type', core_2.ViewContainerRef)
    ], ProductComponent.prototype, "injectionOutlet", void 0);
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'my-product',
            template: "\n  <div class=\"thumbnail\">\n        <img src=\"{{ product?.ImgUrl }}\" alt=\"...\" data-toggle=\"modal\" [attr.data-target]=\"'#'+id\" (click)=\"sendProductToParent()\">\n        <div class=\"caption\">\n          <h3>{{ product?.Name }}</h3>\n          <p>{{ product?.Price }}</p>\n          <p><button (click)=\"addToCart($event)\" class=\"btn btn-primary\" role=\"button\">Add To Cart</button></p>\n        </div>\n      </div>"
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router, shopping_cart_service_1.ShoppingCartService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map