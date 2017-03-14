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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var auth_module_1 = require('./core/auth.module');
var top_wrapper_module_1 = require('./top wrapper/top-wrapper.module');
var middle_wrapper_module_1 = require('./middle wrapper/middle-wrapper.module');
var bottom_wrapper_module_1 = require('./bottom wrapper/bottom-wrapper.module');
var app_component_1 = require('./app.component');
var equal_validator_directive_1 = require('./core/equal-validator.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, forms_1.FormsModule, auth_module_1.AuthModule,
                top_wrapper_module_1.TopWrapperModule, middle_wrapper_module_1.MiddleWrapperModule, bottom_wrapper_module_1.BottomWrapperModule],
            declarations: [app_component_1.AppComponent, equal_validator_directive_1.EqualValidator],
            //entryComponents: [ProductComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/*
const routes: Routes = [{
  path: '',
  component: MiddleWrapperComponent,
  children: [{
    path: '',
    component: HomeMiddleContentComponent
  },
  {
    path: 'purchase',
    component: PurchaseComponent,
    children: [{
      path: 'cart',
      component: ShoppingCartComponent
    },
    {
      path: 'purchaser',
      component: PurchaserComponent
    },
    {
      path: 'confirmation',
      component: ConfirmationComponent
    }]
  },
  {
    path: 'search',
    component: SearchContentComponent
  },
  {
    path: 'she',
    component: MiddleContentComponent,
    children: [{
      path: 'clothes',
      children: [{
        path: 'hats',
        children: []
      },
      {
        path: 'jackets',
        children: []
      },
      {
        path: 'shirts',
        children: []
      },
      {
        path: 'tshirts',
        children: []
      },
      {
        path: 'trousers',
        children: []
      },
      {
        path: 'shoes',
        children: []
      }
      ]
    },
    {
      path: 'accesories',
      children: [{
        path: 'bags',
        children: []
      },
      {
        path: 'sunglasses',
        children: []
      },
      {
        path: 'jewellery',
        children: []
      }
      ]
    }
    ]
  },
  {
    path: 'he',
    component: MiddleContentComponent,
    children: [{
      path: 'clothes',
      children: [{
        path: 'hats',
        children: []
      },
      {
        path: 'jackets',
        children: []
      },
      {
        path: 'shirts',
        children: []
      },
      {
        path: 'tshirts',
        children: []
      },
      {
        path: 'trousers',
        children: []
      },
      {
        path: 'shoes',
        children: []
      }
      ]
    },
    {
      path: 'accesories',
      children: [{
        path: 'sunglasses',
        children: []
      },
      {
        path: 'wallets',
        children: []
      },
      {
        path: 'belts',
        children: []
      }
      ]
    }
    ]
  },
  {
    path: 'kids',
    component: MiddleContentComponent,
    children: [{
      path: 'boys',
      children: [{
        path: 'tshirts',
        children: []
      },
      {
        path: 'trousers',
        children: []
      },
      {
        path: 'shoes',
        children: []
      }
      ]
    },
    {
      path: 'girls',
      children: [{
        path: 'tshirts',
        children: []
      },
      {
        path: 'trousers',
        children: []
      },
      {
        path: 'shoes',
        children: []
      }
      ]
    }
    ],
  }
  ]
},
{
  path: 'admin',
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminAuthGuard]

  }]
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];
*/ 
//# sourceMappingURL=app.module.js.map