import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp, JwtHelper } from 'angular2-jwt/angular2-jwt';

import { LoginBindingModel } from '../shared/login-binding-model';
import { RegisterBindingModel } from '../shared/register-binding-model';
import { Token } from './token';

import 'rxjs/add/operator/map'

import { AppSettings } from '../app.settings';

@Injectable()
export class AccountService {

    private readonly SECOND_IN_DAYS: number = 0.0000115741;

    private readonly NULL_TOKEN: Token = {
        access_token: '',
        token_type: 'bearer',
        expires_in: 0,
        userName: '',
        ".issued": '0',
        ".expires": '0'
    }

    constructor(private http: Http, private authHttp: AuthHttp) { }

    register(model: RegisterBindingModel) {
        return this.http.post(AppSettings.API_ENDPOINT + '/api/account/register', model)
            .catch(this.handleError);
    }

    login(model: LoginBindingModel) {
        let body = 'username=' + model.Email + '&password=' + model.Password + '&grant_type=password';

        return this.http.post(AppSettings.API_ENDPOINT + '/token', body,
            new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }))
            .map((response: Response) => {
                let token = response.json();

                if (token)
                    this.setToken(token);
            }).catch(this.handleError);
    }

    logout() {
        this.setToken(this.NULL_TOKEN);
    }

    getToken() {
        return JSON.parse(localStorage.getItem('token')) as Token || this.NULL_TOKEN;
    }

    tokenExpired(): boolean {
        let stringDate = this.getToken()[".expires"];
        let date = new Date(stringDate);

        if (new Date(Date.now()) > date)
            return true;
        else
            return false;
    }


    isAuthenticated() {
        return this.http.get(AppSettings.API_ENDPOINT + '/api/account/isauthenticated')
            .map(res => res.json() as boolean);
    }

    isAuthenticatedAsAdmin() {
        return this.http.get(AppSettings.API_ENDPOINT + '/api/account/isauthenticatedasadmin')
            .map(res => res.json() as boolean);
    }


    expirationInDays(): number {
        return this.getToken().expires_in * this.SECOND_IN_DAYS;
    }

    tokenExist(): boolean {
        if (this.getToken().access_token == '')
            return false;
        else
            return true;
    }

    private setToken(token: Token) {
        localStorage.setItem('token', JSON.stringify(token));
    }

    private handleError(error: Response) {
        let err: Object = error.json() as Object;
        return Observable.throw(err as Object);
    }
}