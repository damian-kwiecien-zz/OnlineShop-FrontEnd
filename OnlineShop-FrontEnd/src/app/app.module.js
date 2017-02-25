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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var auth_module_1 = require('./core/auth.module');
var app_component_1 = require('./app.component');
var top_wrapper_component_1 = require('./top wrapper/top-wrapper.component');
var middle_wrapper_component_1 = require('./middle wrapper/middle-wrapper.component');
var bottom_wrapper_component_1 = require('./bottom wrapper/bottom-wrapper.component');
var home_middle_content_component_1 = require('./middle wrapper/home content/home-middle-content.component');
var middle_content_component_1 = require('./middle wrapper/main content/middle-content.component');
var shopping_cart_component_1 = require('./middle wrapper/shopping cart/shopping-cart.component');
var search_content_component_1 = require('./middle wrapper/search content/search-content.component');
var account_modal_component_1 = require('./top wrapper/account modal/account-modal.component');
var product_component_1 = require('./middle wrapper/product/product.component');
var sidebar_component_1 = require('./middle wrapper/sidebar/sidebar.component');
var empty_result_component_1 = require('./middle wrapper/shared/empty-result.component');
var product_modal_component_1 = require('./middle wrapper/shared/product-modal.component');
var equal_validator_directive_1 = require('./core/equal-validator.directive');
var routes = [{
        path: '',
        component: middle_wrapper_component_1.MiddleWrapperComponent,
        children: [{
                path: '',
                component: home_middle_content_component_1.HomeMiddleContentComponent
            },
            {
                path: 'cart',
                component: shopping_cart_component_1.ShoppingCartComponent
            },
            {
                path: 'search',
                component: search_content_component_1.SearchContentComponent
            },
            {
                path: 'she',
                component: middle_content_component_1.MiddleContentComponent,
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
                component: middle_content_component_1.MiddleContentComponent,
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
                component: middle_content_component_1.MiddleContentComponent,
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
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, router_1.RouterModule.forRoot(routes), forms_1.FormsModule, auth_module_1.AuthModule],
            declarations: [app_component_1.AppComponent, top_wrapper_component_1.TopWrapperComponent, middle_wrapper_component_1.MiddleWrapperComponent, bottom_wrapper_component_1.BottomWrapperComponent,
                middle_content_component_1.MiddleContentComponent, home_middle_content_component_1.HomeMiddleContentComponent, shopping_cart_component_1.ShoppingCartComponent, account_modal_component_1.AccountModal, search_content_component_1.SearchContentComponent,
                empty_result_component_1.EmptyResultComponent, sidebar_component_1.SidebarComponent, product_component_1.ProductComponent, equal_validator_directive_1.EqualValidator, product_modal_component_1.ProductModalComponent],
            entryComponents: [product_component_1.ProductComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map