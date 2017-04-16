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
var product_1 = require('./product');
var shopping_cart_service_1 = require('../../shared/shopping-cart.service');
var ProductModalComponent = (function () {
    function ProductModalComponent(cartService) {
        this.cartService = cartService;
        this.panelGroupId = this.id + 'Accordion';
        this.panelHeadingIds = [this.id + 'HeadingOne', this.id + 'HeadingTwo'];
        this.divIds = [this.id + 'CollapseOne', this.id + 'CollapseTwo'];
        this.divHrefs = ['#' + this.divIds[0], '#' + this.divIds[1]];
    }
    ProductModalComponent.prototype.addToCart = function (event) {
        this.cartService.addProduct(this.product);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ProductModalComponent.prototype, "product", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ProductModalComponent.prototype, "id", void 0);
    ProductModalComponent = __decorate([
        core_1.Component({
            selector: 'my-product-modal',
            template: "\n\n  <!-- Modal, displays when user chose particular product -->\n  <div class=\"modal fade\" id=\"{{id}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img src=\"{{ product?.imagesUrl[0] }}\" class=\"img-responsive thumbnail\" alt=\"Image not found\">\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"page-header\">\n              <h2>{{ product?.name }}\n                <br>\n                <span class=\"label label-warning\">Hot</span>  <small>{{ product?.price }}$</small></h2>\n            </div>\n\n            <h3 class=\"product-rating\"><i class=\"fa fa-star gold\"></i> <i class=\"fa fa-star gold\"></i> <i class=\"fa fa-star gold\"></i> <i class=\"fa fa-star gold\"></i>              <i class=\"fa fa-star-o\"></i>\n            </h3>\n            <div class=\"panel-group\" id=\"{{panelGroupId}}\" role=\"tablist\" aria-multiselectable=\"true\">\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"{{panelHeadingIds[0]}}\">\n                  <h4 class=\"panel-title\">\n                    <a role=\"button\" data-toggle=\"collapse\" [attr.data-parent]=\"'#'+panelGroupId\" href=\"{{divHrefs[0]}}\" aria-expanded=\"true\" [attr.aria-controls]=\"'#'+divIds[0]\">\n          Description\n        </a>\n                  </h4>\n                </div>\n                <div id=\"{{divIds[0]}}\" class=\"panel-collapse collapse in\" role=\"tabpanel\" [attr.aria-labelledby]=\"panelHeadingIds[0]\">\n                  <div class=\"panel-body\">\n                    {{ product?.description }}\n                  </div>\n                </div>\n              </div>\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"{{panelHeadingIds[1]}}\">\n                  <h4 class=\"panel-title\">\n                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" [attr.data-parent]=\"'#'+panelGroupId\" href=\"{{divHrefs[1]}}\" aria-expanded=\"false\"\n                      [attr.aria-controls]=\"divIds[1]\">\n                      Details\n                      </a>\n                  </h4>\n                </div>\n                <div id=\"{{divIds[1]}}\" class=\"panel-collapse collapse\" role=\"tabpanel\" [attr.aria-labelledby]=\"panelHeadingIds[1]\">\n                  <div class=\"panel-body\">\n                    {{ product?.details }}\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div (click)=\"addToCart($event)\" class=\"btn-group cart\">\n              <button type=\"button\" class=\"btn btn-success\">\n\t\t\t\t\t\t\tAdd to cart \n\t\t\t\t\t\t</button>\n            </div>\n            <div (click)=\"addToCart($event)\" class=\"btn-group wishlist\">\n              <button type=\"button\" class=\"btn btn-danger\">\n\t\t\t\t\t\t\tAdd to wishlist \n\t\t\t\t\t\t</button>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>",
            styles: ["\n  .modal-content {\n    padding: 20px;\n    margin: 5%;\n        }\n  .modal-dialog {\n    width: auto;\n  }"]
        }), 
        __metadata('design:paramtypes', [shopping_cart_service_1.ShoppingCartService])
    ], ProductModalComponent);
    return ProductModalComponent;
}());
exports.ProductModalComponent = ProductModalComponent;
//# sourceMappingURL=product-modal.component.js.map