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
var shopping_cart_item_1 = require('../shared/shopping-cart-item');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/operator/take');
require('rxjs/Rx');
var ShoppingCartService = (function () {
    function ShoppingCartService() {
        // Sources
        this.productAddedSource = new Subject_1.Subject();
        this.productRemovedSource = new Subject_1.Subject();
        this.productAdded$ = this.productAddedSource.asObservable();
        this.productRemoved$ = this.productRemovedSource.asObservable();
        this._empty = true;
        localStorage.setItem('shoppingCartItems', '[]');
    }
    Object.defineProperty(ShoppingCartService.prototype, "empty", {
        get: function () {
            if (this.getItems().length == 0) {
                return true;
            }
            else
                return false;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCartService.prototype.getItems = function () {
        return JSON.parse(localStorage.getItem('shoppingCartItems')) || [];
    };
    ShoppingCartService.prototype.addProduct = function (arg) {
        if (Object.keys(arg).sort().join() === "Category,Description,Details,Id,Name,Price,ProductImages,Target,Type")
            this.addProduct_1(arg);
        else
            this.addProduct_2(arg);
    };
    ShoppingCartService.prototype.addProduct_1 = function (param) {
        var cartItems = this.getItems();
        var i = cartItems.findIndex(function (item) { return item.id == param.id; });
        // Means item not found, so we create one
        if (i == -1) {
            var cartItem = this.createItem(param);
            cartItems.push(cartItem);
            this.setItems(cartItems);
        }
        else {
            ++(cartItems[i].quantity);
            this.setItems(cartItems);
        }
        this.emitProductAddedEvent(param.price);
    };
    ShoppingCartService.prototype.addProduct_2 = function (param) {
        var cartItems = this.getItems();
        var i = cartItems.findIndex(function (item) { return item.id == param.productId; });
        // i == -1 throw error
        ++(cartItems[i].quantity);
        this.setItems(cartItems);
        this.emitProductAddedEvent(cartItems[i].price);
    };
    ShoppingCartService.prototype.removeItemBy = function (id) {
        var cartItems = this.getItems();
        var i = cartItems.findIndex(function (item) { return item.id == id; });
        if (cartItems[i].quantity == 1) {
            this.emitProductRemovedEvent(cartItems[i].price);
            cartItems.splice(i, 1);
            this.setItems(cartItems);
        }
        else {
            --cartItems[i].quantity;
            this.setItems(cartItems);
            this.emitProductRemovedEvent(cartItems[i].price);
        }
    };
    ShoppingCartService.prototype.createItem = function (product) {
        return new shopping_cart_item_1.ShoppingCartItem(product.id, product.name, product.price, 1, product.imgUrl);
    };
    ShoppingCartService.prototype.setItems = function (cartItems) {
        localStorage.setItem('shoppingCartItems', JSON.stringify(cartItems));
    };
    ShoppingCartService.prototype.emitProductAddedEvent = function (price) {
        this.productAddedSource.next(price);
    };
    ShoppingCartService.prototype.emitProductRemovedEvent = function (price) {
        this.productRemovedSource.next(price);
    };
    ShoppingCartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ShoppingCartService);
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shopping-cart.service.js.map