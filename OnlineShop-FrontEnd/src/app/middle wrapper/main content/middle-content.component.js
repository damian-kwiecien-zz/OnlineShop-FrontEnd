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
        this.params = { target: '', category: '', type: '' };
        this.products = [];
    }
    MiddleContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (e) { return e instanceof router_1.NavigationEnd; })
            .subscribe(function (e) {
            _this.prepareParams();
            _this.prepareProductsIds();
        }, function (error) { _this.errorMessage = error; });
    };
    MiddleContentComponent.prototype.addToCart = function (event) {
        this.cartService.addProduct(this.selectedProduct);
    };
    MiddleContentComponent.prototype.raiseModal = function (product) {
        this.selectedProduct = product;
    };
    MiddleContentComponent.prototype.concatProducts = function (event) {
        var body = document.body;
        if ((body.scrollTop + body.clientHeight) >= body.scrollHeight) {
            if (this.productsIds.length != 0) {
                body.scrollTop = body.scrollTop - (10 * body.scrollTop / 100);
                this.fillProducts(3);
            }
        }
    };
    MiddleContentComponent.prototype.prepareParams = function () {
        var urlTab = this.router.url.split("/");
        this.params.target = urlTab[1];
        ;
        this.params.category = urlTab[2];
        this.params.type = urlTab[3];
    };
    MiddleContentComponent.prototype.prepareProductsIds = function () {
        var _this = this;
        this.productService.getProductsIdsBy(this.params)
            .subscribe(function (ids) {
            _this.productsIds = ids;
            _this.fillProducts(6);
        }, function (error) { return _this.errorMessage = error; });
    };
    MiddleContentComponent.prototype.fillProducts = function (count) {
        var _this = this;
        if (this.productsIds.length == 0)
            return;
        if (this.productsIds.length < count)
            count = this.productsIds.length;
        var subIds = this.productsIds.splice(0, count);
        this.productService.getProductsBy(subIds)
            .subscribe(function (p) { _this.products = _this.products.concat(p); }, function (error) { _this.errorMessage = error; });
    };
    MiddleContentComponent = __decorate([
        core_1.Component({
            selector: 'my-middle-content',
            template: "\n     <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-md-3\">\n        <my-sidebar>Loading...</my-sidebar>\n      </div>\n      <main class=\"col-sm-9 col-md-9 right\">\n        <div class=\"page-header\">\n          <h1>Lista Produkt\u00F3w</h1>\n        </div>\n        <div *ngFor=\"let p of products\"\n          class=\"col-sm-6 col-md-4\">\n          <my-product [product]=\"p\" [id]=\"modalId\" (selectProduct)='raiseModal($event)'> </my-product>\n    </div>\n    </main>\n  </div>\n  </div>\n  \n  <my-product-modal [id]=\"modalId\" [product]=\"selectedProduct\"></my-product-modal>",
            styles: ["\n  .modal-content {\n    padding: 20px;\n    margin: 5%;\n        }\n  .modal-dialog {\n    width: auto;\n  }"],
            host: { '(window:scroll)': 'concatProducts(event)' },
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router, shopping_cart_service_1.ShoppingCartService])
    ], MiddleContentComponent);
    return MiddleContentComponent;
}());
exports.MiddleContentComponent = MiddleContentComponent;
//# sourceMappingURL=middle-content.component.js.map