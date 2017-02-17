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
require('rxjs/add/operator/map');
var angular2_jwt_1 = require('angular2-jwt/angular2-jwt');
var login_binding_model_1 = require('../shared/login-binding-model');
var AccountService = (function () {
    function AccountService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.SECOND_IN_DAYS = 0.0000115741;
    }
    AccountService.prototype.loged = function () {
        if (this.tokenExpired())
            return false;
        else
            return true;
    };
    AccountService.prototype.setToken = function (token) {
        localStorage.setItem('token', JSON.stringify(token));
    };
    AccountService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('token'));
    };
    AccountService.prototype.tokenExpired = function () {
        if (this.getToken().expires_in == 0)
            return true;
        else
            return false;
    };
    AccountService.prototype.tokenExist = function () {
        if (this.isEmpty(this.getToken))
            return false;
        else
            return true;
    };
    AccountService.prototype.expirationInDays = function () {
        return this.getToken().expires_in * this.SECOND_IN_DAYS;
    };
    AccountService.prototype.isEmpty = function (obj) {
        for (var x in obj) {
            if (obj.hasOwnProperty(x))
                return false;
        }
        return true;
    };
    AccountService.prototype.register = function (model) {
        return this.http.post('http://localhost:54254/api/account/register', model)
            .map(function (response) { return response.json(); });
    };
    AccountService.prototype.login = function (model) {
        var body = 'username=' + model.Email + '&password=' + model.Password + '&grant_type=password';
        return this.http.post('http://localhost:54254/token', body, new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }))
            .map(function (response) {
            var token = response.json();
            if (token)
                localStorage.setItem('token', JSON.stringify(token));
        });
    };
    AccountService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AccountService.prototype.loginIn = function () {
        var o = new login_binding_model_1.LoginBindingModel();
        o.Email = 'ja@ja.com';
        o.Password = 'Password1`';
        this.login(o).subscribe();
        ;
    };
    AccountService.prototype.test = function () {
        var t = JSON.parse(localStorage.getItem('token'));
        console.log(t);
        var jwtHelper = new angular2_jwt_1.JwtHelper();
        var token = localStorage.getItem('token');
        console.log(jwtHelper.decodeToken(token), jwtHelper.getTokenExpirationDate(token), jwtHelper.isTokenExpired(token));
    };
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map