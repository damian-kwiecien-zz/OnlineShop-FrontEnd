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
var product_1 = require('../shared/product');
var shopping_cart_service_1 = require('../../shared/shopping-cart.service');
var ProductComponent = (function () {
    function ProductComponent(cartService) {
        this.cartService = cartService;
        this.selectProduct = new core_1.EventEmitter();
    }
    ProductComponent.prototype.addToCart = function (event) {
        this.cartService.addProduct(this.product);
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
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'my-product',
            template: "\n  <div class=\"thumbnail\">\n        <img class=\"img-responsive\" src=\"{{ product?.imagesUrl[0] }}\" alt=\"Image not found\" data-toggle=\"modal\" [attr.data-target]=\"'#'+id\" (click)=\"sendProductToParent()\">\n        <div class=\"caption\">\n          <h3>{{ product?.name }}</h3>\n          <p>{{ product?.price }}</p>\n          <p><button (click)=\"addToCart($event)\" class=\"btn btn-danger\" role=\"button\">Add To Cart</button></p>\n        </div>\n      </div>",
            styles: ["\n        img {\n    height: 40vh;\n   }\n   .caption {\n     text-align: center;\n   }"]
        }), 
        __metadata('design:paramtypes', [shopping_cart_service_1.ShoppingCartService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map