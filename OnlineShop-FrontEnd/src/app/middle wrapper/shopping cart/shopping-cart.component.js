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
var shopping_cart_service_1 = require('../../core/shopping-cart.service');
var ShoppingCartComponent = (function () {
    //public empty = true;
    function ShoppingCartComponent(cartService) {
        this.cartService = cartService;
        this.shipping = 5;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.cartItems = this.cartService.getItems();
        this.prepareSubtotalPrice();
        /*
        if(this.cartItems.length == 0)
          this.empty = true;
        else
        this.empty = false;
        */
    };
    ShoppingCartComponent.prototype.prepareSubtotalPrice = function () {
        this.subtotalPrice = 0;
        for (var _i = 0, _a = this.cartItems; _i < _a.length; _i++) {
            var it_1 = _a[_i];
            this.subtotalPrice += it_1.price;
        }
    };
    ShoppingCartComponent.prototype.removeItem = function (item) {
        this.cartService.removeItemBy(item.id);
        this.cartItems = this.cartService.getItems();
    };
    ShoppingCartComponent.prototype.increaseQuantity = function (item, event) {
        ++event.target.nextElementSibling.nextElementSibling.value;
        var prod = new product_1.Product();
        prod.Id = item.id;
        prod.ImgUrl = item.imgUrl;
        prod.Name = item.name;
        prod.Price = item.price;
        this.cartService.addItem(prod);
        this.cartItems = this.cartService.getItems();
    };
    ShoppingCartComponent.prototype.decreaseQuantity = function (item, event) {
        --event.target.nextElementSibling.value;
        var prod = new product_1.Product();
        prod.Id = item.id;
        prod.ImgUrl = item.imgUrl;
        prod.Name = item.name;
        prod.Price = item.price;
        this.cartService.removeItemBy(item.id);
        this.cartItems = this.cartService.getItems();
        /*
        if(this.cartItems.length == 0)
          this.empty = true;
        else
        this.empty = false;
        */
    };
    ShoppingCartComponent = __decorate([
        core_1.Component({
            selector: 'my-shopping-cart',
            templateUrl: 'app/middle wrapper/shopping cart/shopping-cart.component.html'
        }), 
        __metadata('design:paramtypes', [shopping_cart_service_1.ShoppingCartService])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=shopping-cart.component.js.map