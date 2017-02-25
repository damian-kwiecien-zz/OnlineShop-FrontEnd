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
var router_1 = require('@angular/router');
require('rxjs/add/operator/filter');
var SidebarComponent = (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.heSelected = false;
        this.sheSelected = false;
        this.kidsSelected = false;
        this.heSelected = false;
        this.sheSelected = false;
        this.kidsSelected = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (e) { return e instanceof router_1.NavigationEnd; })
            .subscribe(function (e) { _this.prepareSidebar(e.url); }, function (error) { _this.errorMessage = error; });
    };
    SidebarComponent.prototype.prepareSidebar = function (url) {
        var tab = url.split('/');
        // First element is empty
        tab.shift();
        switch (tab[0]) {
            case "he":
                this.heSelected = true;
                this.sheSelected = false;
                this.kidsSelected = false;
                break;
            case "she":
                this.heSelected = false;
                this.sheSelected = true;
                this.kidsSelected = false;
                break;
            case "kids":
                this.heSelected = false;
                this.sheSelected = false;
                this.kidsSelected = true;
                break;
        }
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'my-sidebar',
            templateUrl: 'app/middle wrapper/sidebar/sidebar.component.html',
            styles: ["body {\n  margin-top: 50px;\n}\n\n.glyphicon {\n  margin-right: 10px;\n}\n\n.panel-body {\n  padding: 0px;\n}\n\n.panel-body table tr td {\n  padding-left: 15px\n}\n\n.panel-body .table {\n  margin-bottom: 0px;\n}"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map