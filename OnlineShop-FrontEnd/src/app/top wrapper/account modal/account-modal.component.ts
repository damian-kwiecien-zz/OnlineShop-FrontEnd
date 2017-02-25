import { Component, ChangeDetectorRef } from '@angular/core';

import { RegisterBindingModel } from '../../shared/register-binding-model';
import { LoginBindingModel } from '../../shared/login-binding-model';
import { AccountService } from '../../core/account.service';

@Component({
    selector: 'my-account-modal',
    templateUrl: 'app/top wrapper/account modal/account-modal.component.html',
    styleUrls: ['app/top wrapper/account modal/account-modal.component.css']
})
export class AccountModal {
    registerShown: boolean;
    loginShown: boolean;
    active: boolean;
    loginModel: LoginBindingModel;
    registerModel: RegisterBindingModel;
    registerResult: any;
    loginResult: any;

    constructor(private accountService: AccountService, private cd: ChangeDetectorRef) {
        this.registerShown = false;
        this.loginShown = true;
        this.active = false;
        this.registerModel = new RegisterBindingModel();
        this.loginModel = new LoginBindingModel();
        this.registerResult = '';
        this.loginResult = '';
    }

    register() {
        this.accountService.register(this.registerModel).subscribe(
            data => { },
            error => { this.registerResult = error["ModelState"][""]; this.cd.detectChanges(); },
            () => { this.registerResult = 'Success!'; this.cd.detectChanges(); });
    }

    login() {
        this.accountService.login(this.loginModel).subscribe(
            data => { },
            error => { this.loginResult = error["error_description"]; this.cd.detectChanges(); },
            () => { this.loginResult = 'Success!'; this.cd.detectChanges(); });
    }

    onKeyup(event: any) {
        if (event.target.value === '')
            event.target.previousElementSibling.className = "";
        else
            event.target.previousElementSibling.className = "active highlight";
    }

    showRegister(event: any) {
        this.loginShown = false;
        this.registerShown = true;

        // Jquery
        $(".register").parent().addClass('active');
        $(".login").parent().removeClass('active');
        $(".register-form").fadeIn(600);
    }

    showLogin(event: any) {
        this.loginShown = true;
        this.registerShown = false;

        // Jquery
        $(".login").parent().addClass('active');
        $(".register").parent().removeClass('active');
        $(".login-form").fadeIn(600);
    }
}