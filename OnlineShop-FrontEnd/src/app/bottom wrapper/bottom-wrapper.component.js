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
var BottomWrapperComponent = (function () {
    function BottomWrapperComponent() {
    }
    BottomWrapperComponent = __decorate([
        core_1.Component({
            selector: 'my-bottom-wrapper',
            templateUrl: 'app/bottom wrapper/bottom-wrapper.component.html',
            styles: ["\n  .bottom-background {\n    position: relative;\n    width: 100%;\n    height: 60%;\n    background-image: url(\"/assets/images/backgrounds/bg6.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n  }\n\n  .bottom-content {\n    position: absolute;\n    width: 100%;\n  }\n  \n  .bottom-content > nav {\n    height: 100%;\n  }\n  \n  nav {\n    text-align: center;\n    margin-top: 15%;\n  }\n  \n  .btn-group {\n    font-size: xx-large;\n  }"]
        }), 
        __metadata('design:paramtypes', [])
    ], BottomWrapperComponent);
    return BottomWrapperComponent;
}());
exports.BottomWrapperComponent = BottomWrapperComponent;
//# sourceMappingURL=bottom-wrapper.component.js.map