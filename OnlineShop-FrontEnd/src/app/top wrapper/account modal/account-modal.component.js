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
var register_binding_model_1 = require('../../shared/register-binding-model');
var login_binding_model_1 = require('../../shared/login-binding-model');
var account_service_1 = require('../../core/account.service');
var AccountModal = (function () {
    function AccountModal(accountService) {
        this.accountService = accountService;
        this.registerShown = false;
        this.loginShown = true;
        this.active = false;
        this.loginModel = new login_binding_model_1.LoginBindingModel();
        this.registerModel = new register_binding_model_1.RegisterBindingModel();
        this.loading = false;
    }
    AccountModal.prototype.register = function () {
        // Jquery
        //$(".close-account-modal").trigger("click");
        var _this = this;
        this.loading = true;
        this.accountService.register(this.registerModel).subscribe(function (data) { }, function (error) { _this.loading = false; });
    };
    AccountModal.prototype.login = function () {
        var _this = this;
        this.accountService.login(this.loginModel).subscribe(function (data) { }, function (error) { _this.loading = false; });
    };
    AccountModal.prototype.onKeyup = function (event) {
        if (event.target.value === '')
            event.target.previousElementSibling.className = "";
        else
            event.target.previousElementSibling.className = "active highlight";
    };
    AccountModal.prototype.showRegister = function (event) {
        this.loginShown = false;
        this.registerShown = true;
        // Jquery
        $(".register").parent().addClass('active');
        $(".login").parent().removeClass('active');
        $(".register-form").fadeIn(600);
        this.accountService.loginIn();
        this.accountService.test();
    };
    AccountModal.prototype.showLogin = function (event) {
        this.loginShown = true;
        this.registerShown = false;
        // Jquery
        $(".login").parent().addClass('active');
        $(".register").parent().removeClass('active');
        $(".login-form").fadeIn(600);
    };
    AccountModal = __decorate([
        core_1.Component({
            selector: 'my-account-modal',
            templateUrl: 'app/top wrapper/account modal/account-modal.component.html',
            styleUrls: ['app/top wrapper/account modal/account-modal.component.css']
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService])
    ], AccountModal);
    return AccountModal;
}());
exports.AccountModal = AccountModal;
//# sourceMappingURL=account-modal.component.js.map