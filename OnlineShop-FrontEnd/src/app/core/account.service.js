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
var Observable_1 = require('rxjs/Observable');
var angular2_jwt_1 = require('angular2-jwt/angular2-jwt');
require('rxjs/add/operator/map');
var app_settings_1 = require('../app.settings');
var AccountService = (function () {
    function AccountService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.SECOND_IN_DAYS = 0.0000115741;
        this.NULL_TOKEN = {
            access_token: '',
            token_type: 'bearer',
            expires_in: 0,
            userName: '',
            ".issued": '0',
            ".expires": '0'
        };
    }
    AccountService.prototype.register = function (model) {
        return this.http.post(app_settings_1.AppSettings.API_ENDPOINT + '/api/account/register', model)
            .catch(this.handleError);
    };
    AccountService.prototype.login = function (model) {
        var _this = this;
        var body = 'username=' + model.Email + '&password=' + model.Password + '&grant_type=password';
        return this.http.post(app_settings_1.AppSettings.API_ENDPOINT + '/token', body, new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }))
            .map(function (response) {
            var token = response.json();
            if (token)
                _this.setToken(token);
        }).catch(this.handleError);
    };
    AccountService.prototype.logout = function () {
        this.setToken(this.NULL_TOKEN);
    };
    AccountService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('token')) || this.NULL_TOKEN;
    };
    AccountService.prototype.tokenExpired = function () {
        var stringDate = this.getToken()[".expires"];
        var date = new Date(stringDate);
        if (new Date(Date.now()) > date)
            return true;
        else
            return false;
    };
    AccountService.prototype.isAuthenticated = function () {
        return this.http.get(app_settings_1.AppSettings.API_ENDPOINT + '/api/account/isauthenticated')
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.isAuthenticatedAsAdmin = function () {
        return this.http.get(app_settings_1.AppSettings.API_ENDPOINT + '/api/account/isauthenticatedasadmin')
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.expirationInDays = function () {
        return this.getToken().expires_in * this.SECOND_IN_DAYS;
    };
    AccountService.prototype.tokenExist = function () {
        if (this.getToken().access_token == '')
            return false;
        else
            return true;
    };
    AccountService.prototype.setToken = function (token) {
        localStorage.setItem('token', JSON.stringify(token));
    };
    AccountService.prototype.handleError = function (error) {
        var err = error.json();
        return Observable_1.Observable.throw(err);
    };
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map