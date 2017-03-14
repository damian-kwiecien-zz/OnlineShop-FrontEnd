import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { AccountService } from './account.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router) { }
    canActivate() {
        return this.accountService.isAuthenticated();
    }
}

