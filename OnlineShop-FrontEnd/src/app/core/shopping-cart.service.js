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
var shopping_cart_item_1 = require('../shared/shopping-cart-item');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/operator/take');
require('rxjs/Rx');
var Subject_1 = require('rxjs/Subject');
var ShoppingCartService = (function () {
    function ShoppingCartService(httpService) {
        this.httpService = httpService;
        this._empty = true;
        // Sources
        this.itemAddedSource = new Subject_1.Subject();
        this.itemRemovedSource = new Subject_1.Subject();
        this.itemAdded$ = this.itemAddedSource.asObservable();
        this.itemRemoved$ = this.itemRemovedSource.asObservable();
    }
    Object.defineProperty(ShoppingCartService.prototype, "empty", {
        get: function () {
            var cartItems = this.getItems();
            // Shopping Cart is not empty when exist and has lenght != 0
            if (cartItems && cartItems.length != 0) {
                return false;
            }
            else
                return true;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCartService.prototype.addItem = function (product) {
        var cartItems = this.getItems();
        // Shopping Cart is not empty
        if (!this.empty) {
            var result = cartItems.findIndex(function (item) { return item.id == product.Id; });
            // Mean object not found, so we create one
            if (result == -1) {
                var cartItem = this.createItem(product);
                cartItems.push(cartItem);
                this.saveItemsToSessionStorage(cartItems);
                this.emitItemAddedEvent(cartItem);
            }
            else {
                ++(cartItems[result].quantity);
                this.saveItemsToSessionStorage(cartItems);
                this.emitItemAddedEvent(cartItems[result]);
            }
        }
        else {
            var cartItem = this.createItem(product);
            cartItems.push(cartItem);
            this.saveItemsToSessionStorage(cartItems);
            this.emitItemAddedEvent(cartItem);
        }
    };
    ShoppingCartService.prototype.removeItemBy = function (id) {
        var cartItems = this.getItems();
        var i = cartItems.findIndex(function (item) { return item.id == id; });
        if (i == -1)
            return; /*TO DO: error handling here */
        if (cartItems[i].quantity == 1) {
            this.emitItemRemovedEvent(cartItems[i]);
            cartItems.splice(i, 1);
            this.saveItemsToSessionStorage(cartItems);
        }
        else {
            --cartItems[i].quantity;
            this.saveItemsToSessionStorage(cartItems);
            this.emitItemRemovedEvent(cartItems[i]);
        }
    };
    ShoppingCartService.prototype.getItems = function () {
        var stringCartItems = sessionStorage.getItem('shoppingCartItems');
        var cartItems = JSON.parse(stringCartItems);
        return cartItems || [];
    };
    ShoppingCartService.prototype.createItem = function (product) {
        var cartItem = new shopping_cart_item_1.ShoppingCartItem();
        cartItem.id = product.Id;
        cartItem.name = product.Name;
        cartItem.imgUrl = product.ImgUrl;
        cartItem.price = product.Price;
        cartItem.quantity = 1;
        return cartItem;
    };
    ShoppingCartService.prototype.saveItemsToSessionStorage = function (cartItems) {
        sessionStorage.setItem('shoppingCartItems', JSON.stringify(cartItems));
    };
    ShoppingCartService.prototype.emitItemAddedEvent = function (cartItem) {
        this.itemAddedSource.next(cartItem);
    };
    ShoppingCartService.prototype.emitItemRemovedEvent = function (cartItem) {
        this.itemRemovedSource.next(cartItem);
    };
    ShoppingCartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ShoppingCartService);
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shopping-cart.service.js.map