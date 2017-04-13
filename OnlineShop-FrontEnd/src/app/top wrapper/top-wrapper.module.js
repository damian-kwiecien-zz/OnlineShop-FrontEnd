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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var top_wrapper_component_1 = require('./top-wrapper.component');
var account_modal_component_1 = require('./account modal/account-modal.component');
var TopWrapperModule = (function () {
    function TopWrapperModule() {
    }
    TopWrapperModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule],
            declarations: [top_wrapper_component_1.TopWrapperComponent, account_modal_component_1.AccountModal],
            exports: [top_wrapper_component_1.TopWrapperComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TopWrapperModule);
    return TopWrapperModule;
}());
exports.TopWrapperModule = TopWrapperModule;
//# sourceMappingURL=top-wrapper.module.js.map