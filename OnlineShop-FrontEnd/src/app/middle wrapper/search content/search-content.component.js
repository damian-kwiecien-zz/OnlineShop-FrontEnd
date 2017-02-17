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
require('rxjs/add/operator/take');
var SearchContentComponent = (function () {
    function SearchContentComponent(productService, router, cartService) {
        this.productService = productService;
        this.router = router;
        this.cartService = cartService;
        this.products = [];
        this.empty = true;
        this.paramWrapper = { searchParameter: '' };
    }
    SearchContentComponent.prototype.ngOnInit = function () {
        this.prepareParamWrapper();
        this.prepareProductsIdList();
    };
    SearchContentComponent.prototype.addToCart = function (event) {
        this.cartService.addItem(this.selectedProduct);
    };
    SearchContentComponent.prototype.prepareParamWrapper = function () {
        this.paramWrapper = JSON.parse(sessionStorage.getItem('searchParamWrapper'));
    };
    SearchContentComponent.prototype.prepareProductsIdList = function () {
        var _this = this;
        this.productService.getProductsIdListBy(this.paramWrapper)
            .subscribe(function (list) {
            _this.productsIdList = list;
            _this.emptyProducts();
            _this.fillProducts(8);
        }, function (error) { return _this.errorMessage = error; });
    };
    SearchContentComponent.prototype.emptyProducts = function () {
        this.products = [];
    };
    SearchContentComponent.prototype.fillProducts = function (maxCount) {
        var _this = this;
        if (maxCount === void 0) { maxCount = 8; }
        var iterationCount = 0;
        for (var _i = 0, _a = this.productsIdList; _i < _a.length; _i++) {
            var id = _a[_i];
            if (iterationCount == maxCount)
                break;
            this.productService.getProductBy(id)
                .subscribe(function (p) { _this.products = _this.products.concat(p); }, function (error) { _this.errorMessage = error; }, function () {
                if (_this.productsIdList.length == 0)
                    _this.empty = true;
                else
                    _this.empty = false;
            });
            ++iterationCount;
        }
        for (var i = 0; i < iterationCount; ++i) {
            this.productsIdList.shift();
        }
    };
    SearchContentComponent.prototype.raiseModal = function (product) {
        this.selectedProduct = product;
    };
    SearchContentComponent.prototype.notifyScroll = function (event) {
        var body = document.body;
        if ((body.scrollTop + body.clientHeight) >= body.scrollHeight) {
            if (this.products != []) {
                body.scrollTop = body.scrollTop - (10 * body.scrollTop / 100);
                this.fillProducts(4);
            }
        }
    };
    SearchContentComponent = __decorate([
        core_1.Component({
            selector: 'my-search-content',
            template: "\n<my-empty-result *ngIf=\"empty\"></my-empty-result>\n\n <main *ngIf=\"!empty\" class=\"container\">\n        <div class=\"page-header\">\n          <h1>Lista Produkt\u00F3w</h1>\n        </div>\n        <div *ngFor=\"let p of products\"\n          class=\"col-sm-6 col-md-3\">\n          <my-product [product]=\"p\" (selectProduct)='raiseModal($event)'> </my-product>\n    </div>\n    </main>\n  \n  \n\n  <!-- Modal, displays when user chose particular product -->\n  <div class=\"modal fade\" id=\"productModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img src=\"{{ selectedProduct?.ImgUrl }}\" class=\"img-responsive thumbnail\" alt=\"Cinque Terre\">\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"page-header\">\n              <h2>{{ selectedProduct?.Name }}\n                <br>\n                <span class=\"label label-warning\">Hot</span>  <small>{{ selectedProduct?.Price }}$</small></h2>\n            </div>\n\n            <h3 class=\"product-rating\"><i class=\"fa fa-star gold\"></i> <i class=\"fa fa-star gold\"></i> <i class=\"fa fa-star gold\"></i> <i class=\"fa fa-star gold\"></i>              <i class=\"fa fa-star-o\"></i>\n            </h3>\n            <div class=\"panel-group\" id=\"productAccordion\" role=\"tablist\" aria-multiselectable=\"true\">\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"productHeadingOne\">\n                  <h4 class=\"panel-title\">\n                    <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#productAccordion\" href=\"#productCollapseOne\" aria-expanded=\"true\" aria-controls=\"productCollapseOne\">\n          Description\n        </a>\n                  </h4>\n                </div>\n                <div id=\"productCollapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"productHeadingOne\">\n                  <div class=\"panel-body\">\n                    {{ selectedProduct?.Description }}\n                  </div>\n                </div>\n              </div>\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"productHeadingTwo\">\n                  <h4 class=\"panel-title\">\n                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#productAccordion\" href=\"#productCollapseTwo\" aria-expanded=\"false\"\n                      aria-controls=\"productCollapseTwo\">\n                      Details\n                      </a>\n                  </h4>\n                </div>\n                <div id=\"productCollapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"productHeadingTwo\">\n                  <div class=\"panel-body\">\n                    {{ selectedProduct?.Details }}\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div (click)=\"addToCart($event)\" class=\"btn-group cart\">\n              <button type=\"button\" class=\"btn btn-success\">\n\t\t\t\t\t\t\tAdd to cart \n\t\t\t\t\t\t</button>\n            </div>\n            <div (click)=\"addToCart($event)\" class=\"btn-group wishlist\">\n              <button type=\"button\" class=\"btn btn-danger\">\n\t\t\t\t\t\t\tAdd to wishlist \n\t\t\t\t\t\t</button>\n            </div>\n          </div>\n        </div>",
            styles: ["\n  .container {\n          text-align: center;\n        }"],
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router, shopping_cart_service_1.ShoppingCartService])
    ], SearchContentComponent);
    return SearchContentComponent;
}());
exports.SearchContentComponent = SearchContentComponent;
//# sourceMappingURL=search-content.component.js.map