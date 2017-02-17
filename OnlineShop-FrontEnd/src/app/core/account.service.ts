import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { AuthHttp, JwtHelper } from 'angular2-jwt/angular2-jwt';

import { LoginBindingModel } from '../shared/login-binding-model';
import { RegisterBindingModel } from '../shared/register-binding-model';

@Injectable()
export class AccountService {
    public loged() {
        if(this.tokenExpired())
            return false;
        else
            return true;
    }

    private setToken(token: any) {
        localStorage.setItem('token', JSON.stringify(token));
    }

    public getToken() {
        return <Token>JSON.parse(localStorage.getItem('token'));
    }

    private tokenExpired(): boolean {
        if(this.getToken().expires_in == 0)
            return true
        else 
            return false;
    }

    private tokenExist(): boolean {
        if(this.isEmpty(this.getToken))
            return false;
        else
            return true;
    }

    private readonly SECOND_IN_DAYS = 0.0000115741;
    
    public expirationInDays(): number {
        return this.getToken().expires_in * this.SECOND_IN_DAYS;
    }

    private isEmpty(obj: Object) {
   for (var x in obj) { if (obj.hasOwnProperty(x))  return false; }
   return true;
}
constructor(private http: Http, private authHttp: AuthHttp) { }

register(model: RegisterBindingModel) {
    return this.http.post('http://localhost:54254/api/account/register', model)
        .map((response: Response) => response.json());
}

login(model: LoginBindingModel) {
    let body = 'username=' + model.Email + '&password=' + model.Password + '&grant_type=password';

    return this.http.post('http://localhost:54254/token', body,
        new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }))
        .map((response: Response) => {
            let token = response.json();

            if (token)
                localStorage.setItem('token', JSON.stringify(token));
        });
}

logout() {
    localStorage.removeItem('token');
}
loginIn() {
    let o = new LoginBindingModel();
    o.Email = 'ja@ja.com';
    o.Password = 'Password1`';
    this.login(o).subscribe();;
}
test() {
    let t:Token = <Token>JSON.parse(localStorage.getItem('token'))
    console.log(t);

    let jwtHelper: JwtHelper = new JwtHelper();
    var token = localStorage.getItem('token');

    console.log(
        jwtHelper.decodeToken(token),
        jwtHelper.getTokenExpirationDate(token),
        jwtHelper.isTokenExpired(token)
    );



}

}




export interface Token {
    access_token: string;
    token_type: string;
    expires_in: number;
    userName: string;
    ".issued": string;//"Thu, 16 Feb 2017 23:07:56 GMT",
    ".expires": string;//"Thu, 02 Mar 2017 23:07:56 GMT"
}
