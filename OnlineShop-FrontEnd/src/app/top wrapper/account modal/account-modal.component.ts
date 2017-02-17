import { Component } from '@angular/core';

import { RegisterBindingModel } from '../../shared/register-binding-model';
import { LoginBindingModel } from '../../shared/login-binding-model';
import { AccountService } from '../../core/account.service';

@Component({
    selector: 'my-account-modal',
    templateUrl: 'app/top wrapper/account modal/account-modal.component.html',
    styleUrls: ['app/top wrapper/account modal/account-modal.component.css']
})
export class AccountModal {
    public registerShown: boolean = false;
    public loginShown: boolean = true;
    public active = false;
    public loginModel: LoginBindingModel = new LoginBindingModel();
    public registerModel: RegisterBindingModel = new RegisterBindingModel();
    public loading = false;

    constructor(private accountService: AccountService) {}
     

    register() {
        // Jquery
        //$(".close-account-modal").trigger("click");

        this.loading = true;
        this.accountService.register(this.registerModel).subscribe(
            data => { },
            error => { /*TO DO: error*/ this.loading = false; });
    }

    login() {
        this.accountService.login(this.loginModel).subscribe(
            data => { },
            error => { /*TO DO: error*/ this.loading = false; });
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

        this.accountService.loginIn();
        this.accountService.test();
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