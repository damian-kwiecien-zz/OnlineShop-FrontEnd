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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var purchase_component_1 = require('./purchase.component');
var shopping_cart_component_1 = require('./shopping cart/shopping-cart.component');
var purchaser_component_1 = require('./purchaser/purchaser.component');
var confirmation_component_1 = require('./confirmation/confirmation.component');
var empty_result_component_1 = require('../shared/empty-result.component');
var routes = [{
        path: 'purchase',
        component: purchase_component_1.PurchaseComponent,
        children: [{
                path: 'cart',
                component: shopping_cart_component_1.ShoppingCartComponent
            },
            {
                path: 'purchaser',
                component: purchaser_component_1.PurchaserComponent
            },
            {
                path: 'confirmation',
                component: confirmation_component_1.ConfirmationComponent
            }]
    }];
var PurchaseModule = (function () {
    function PurchaseModule() {
    }
    PurchaseModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), forms_1.FormsModule],
            declarations: [purchase_component_1.PurchaseComponent, shopping_cart_component_1.ShoppingCartComponent, purchaser_component_1.PurchaserComponent, confirmation_component_1.ConfirmationComponent,
                empty_result_component_1.EmptyResultComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PurchaseModule);
    return PurchaseModule;
}());
exports.PurchaseModule = PurchaseModule;
//# sourceMappingURL=purchase.module.js.map