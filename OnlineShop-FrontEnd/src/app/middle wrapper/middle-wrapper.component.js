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
var MiddleWrapperComponent = (function () {
    function MiddleWrapperComponent() {
    }
    MiddleWrapperComponent.prototype.ngAfterViewChecked = function () {
        this.setMiddleBackgroundHeightLikeMiddleContentHeight();
    };
    // Jquery
    // Without it background have wrong height
    MiddleWrapperComponent.prototype.setMiddleBackgroundHeightLikeMiddleContentHeight = function () {
        $(function () { $('.middle-background').css('min-height', $('.middle-content').outerHeight(true)); });
    };
    __decorate([
        core_1.ViewChild('middleContent'), 
        __metadata('design:type', core_1.ElementRef)
    ], MiddleWrapperComponent.prototype, "middleContent", void 0);
    MiddleWrapperComponent = __decorate([
        core_1.Component({
            selector: 'my-middle-wrapper',
            template: "\n  <div #middleBackground class=\"middle-background\">\n    <div #middleContent class=\"middle-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>",
            styles: ["\n  .middle-background {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background: rgba(255,250,250,0.2);\n  }\n  \n  .middle-content {\n    position: absolute;\n    width: 100%;\n    margin-top: 5%;\n    margin-bottom: 5%;\n  }"]
        }), 
        __metadata('design:paramtypes', [])
    ], MiddleWrapperComponent);
    return MiddleWrapperComponent;
}());
exports.MiddleWrapperComponent = MiddleWrapperComponent;
//# sourceMappingURL=middle-wrapper.component.js.map