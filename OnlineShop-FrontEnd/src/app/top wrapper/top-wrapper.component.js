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
var shopping_cart_service_1 = require('../shared/shopping-cart.service');
var postman_service_1 = require('../shared/postman.service');
var TopWrapperComponent = (function () {
    function TopWrapperComponent(accountService, postman, router, cartService) {
        this.accountService = accountService;
        this.postman = postman;
        this.router = router;
        this.cartService = cartService;
        this.cartCount = 0;
        this.cartPrice = 0;
        this.param = { searchParameter: '' };
    }
    TopWrapperComponent.prototype.ngOnInit = function () {
        //// JQUERY CODE
        // Resizes main navbar header to proper size
        $('.navbar').find('.navbar-header').css('height', $('.navbar').innerHeight());
        // Resizes main navbar right part to proper size
        $('.navbar').find('.navbar-right').css('height', $('.navbar').innerHeight());
        // Resizes shopping cart part to proper size
        $('.navbar-right').find('.shopping-cart').css('width', $('.navbar-right').innerHeight());
        $('#myCarousel').carousel({
            pause: 'null',
            interval: 3000
        });
        this.subscribeForProductAddedEvents();
        this.subscribeForProductRemovedEvents();
    };
    TopWrapperComponent.prototype.search = function () {
        this.postman.sendSearchParam(this.param.searchParameter);
        this.router.navigateByUrl('/search');
    };
    TopWrapperComponent.prototype.logout = function (event) {
        this.accountService.logout();
    };
    TopWrapperComponent.prototype.subscribeForProductAddedEvents = function () {
        var _this = this;
        this.cartService.productAdded$.subscribe(function (price) {
            ++_this.cartCount;
            _this.cartPrice += price;
        });
    };
    TopWrapperComponent.prototype.subscribeForProductRemovedEvents = function () {
        var _this = this;
        this.cartService.productRemoved$.subscribe(function (price) {
            --_this.cartCount;
            _this.cartPrice -= price;
        });
    };
    TopWrapperComponent = __decorate([
        core_1.Component({
            selector: 'my-top-wrapper',
            templateUrl: 'app/top wrapper/top-wrapper.component.html',
            styleUrls: ['app/top wrapper/top-wrapper.component.css']
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, postman_service_1.PostmanService, router_1.Router, shopping_cart_service_1.ShoppingCartService])
    ], TopWrapperComponent);
    return TopWrapperComponent;
}());
exports.TopWrapperComponent = TopWrapperComponent;
//# sourceMappingURL=top-wrapper.component.js.map