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
var account_service_1 = require('../core/account.service');
var product_service_1 = require('../middle wrapper/shared/product.service');
var shopping_cart_service_1 = require('../core/shopping-cart.service');
var TopWrapperComponent = (function () {
    function TopWrapperComponent(accountService, router, cartService) {
        this.accountService = accountService;
        this.router = router;
        this.cartService = cartService;
        this.paramWrapper = { searchParameter: '' };
        this.cartItemsCount = 0;
        this.cartPrice = 0;
    }
    TopWrapperComponent.prototype.ngOnInit = function () {
        //// JQUERY CODE
        // Resizes main navbar header to proper size
        //$('.navbar').find('.navbar-header').css('height', $('.navbar').innerHeight());
        // Resizes main navbar right part to proper size
        //$('.navbar').find('.navbar-right').css('height', $('.navbar').innerHeight());
        $('#myCarousel').carousel({
            pause: 'null',
            interval: 3000
        });
        this.subscribeForItemAddedEvents();
        this.subscribeForItemRemovedEvents();
    };
    TopWrapperComponent.prototype.subscribeForItemAddedEvents = function () {
        var _this = this;
        this.cartService.itemAdded$.subscribe(function (item) {
            ++_this.cartItemsCount;
            _this.cartPrice += item.price;
        });
    };
    TopWrapperComponent.prototype.subscribeForItemRemovedEvents = function () {
        var _this = this;
        this.cartService.itemRemoved$.subscribe(function (item) {
            --_this.cartItemsCount;
            _this.cartPrice -= item.price;
            console.log(item);
        });
    };
    TopWrapperComponent.prototype.logout = function (event) {
        this.accountService.logout();
    };
    TopWrapperComponent.prototype.search = function () {
        sessionStorage.setItem('searchParamWrapper', JSON.stringify(this.paramWrapper));
        this.router.navigateByUrl('/search');
    };
    TopWrapperComponent = __decorate([
        core_1.Component({
            selector: 'my-top-wrapper',
            templateUrl: 'app/top wrapper/top-wrapper.component.html',
            styleUrls: ['app/top wrapper/top-wrapper.component.css'],
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, router_1.Router, shopping_cart_service_1.ShoppingCartService])
    ], TopWrapperComponent);
    return TopWrapperComponent;
}());
exports.TopWrapperComponent = TopWrapperComponent;
//# sourceMappingURL=top-wrapper.component.js.map