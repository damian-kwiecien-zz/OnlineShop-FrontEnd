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
var shopping_cart_service_1 = require('../../core/shopping-cart.service');
var MiddleContentComponent = (function () {
    function MiddleContentComponent(productService, router, cartService) {
        this.productService = productService;
        this.router = router;
        this.cartService = cartService;
        this.modalId = "mainModal";
        this.paramWrapper = { target: '', category: '', type: '' };
    }
    MiddleContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (e) { return e instanceof router_1.NavigationEnd; })
            .subscribe(function (e) {
            _this.prepareQueryString();
            _this.prepareProductsIdList();
        }, function (error) { _this.errorMessage = error; });
    };
    MiddleContentComponent.prototype.addToCart = function (event) {
        this.cartService.addItem(this.selectedProduct);
    };
    MiddleContentComponent.prototype.prepareQueryString = function () {
        var urlTab = this.router.url.split("/");
        this.paramWrapper.target = urlTab[1];
        ;
        this.paramWrapper.category = urlTab[2];
        this.paramWrapper.type = urlTab[3];
    };
    MiddleContentComponent.prototype.prepareProductsIdList = function () {
        var _this = this;
        this.productService.getProductsIdListBy(this.paramWrapper)
            .subscribe(function (list) {
            _this.productsIdList = list;
            _this.emptyProducts();
            _this.fillProducts(6);
        }, function (error) { return _this.errorMessage = error; });
    };
    MiddleContentComponent.prototype.emptyProducts = function () {
        this.products = [];
    };
    MiddleContentComponent.prototype.fillProducts = function (maxCount) {
        var _this = this;
        if (maxCount === void 0) { maxCount = 6; }
        var iterationCount = 0;
        for (var _i = 0, _a = this.productsIdList; _i < _a.length; _i++) {
            var id = _a[_i];
            if (iterationCount == maxCount)
                break;
            this.productService.getProductBy(id)
                .subscribe(function (p) { _this.products = _this.products.concat(p); }, function (error) { _this.errorMessage = error; });
            ++iterationCount;
        }
        for (var i = 0; i < iterationCount; ++i) {
            this.productsIdList.shift();
        }
    };
    MiddleContentComponent.prototype.raiseModal = function (product) {
        this.selectedProduct = product;
    };
    MiddleContentComponent.prototype.notifyScroll = function (event) {
        var body = document.body;
        if ((body.scrollTop + body.clientHeight) >= body.scrollHeight) {
            if (this.products != []) {
                body.scrollTop = body.scrollTop - (10 * body.scrollTop / 100);
                this.fillProducts(3);
            }
        }
    };
    MiddleContentComponent = __decorate([
        core_1.Component({
            selector: 'my-middle-content',
            template: "\n     <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-md-3\">\n        <my-sidebar>Loading...</my-sidebar>\n      </div>\n      <main class=\"col-sm-9 col-md-9 right\">\n        <div class=\"page-header\">\n          <h1>Lista Produkt\u00F3w</h1>\n        </div>\n        <div *ngFor=\"let p of products\"\n          class=\"col-sm-6 col-md-4\">\n          <my-product [product]=\"p\" [id]=\"modalId\" (selectProduct)='raiseModal($event)'> </my-product>\n    </div>\n    </main>\n  </div>\n  </div>\n  \n  <my-product-modal [id]=\"modalId\" [product]=\"selectedProduct\"></my-product-modal>",
            //styleUrls: ['app/products-middle-wrapper.component.css'],
            styles: ["\n  .modal-content {\n    padding: 20px;\n    margin: 5%;\n        }\n  .modal-dialog {\n    width: auto;\n  }"],
            host: { '(window:scroll)': 'notifyScroll(event)' },
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router, shopping_cart_service_1.ShoppingCartService])
    ], MiddleContentComponent);
    return MiddleContentComponent;
}());
exports.MiddleContentComponent = MiddleContentComponent;
//# sourceMappingURL=middle-content.component.js.map