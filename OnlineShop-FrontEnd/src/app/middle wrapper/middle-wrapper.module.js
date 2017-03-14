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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var purchase_module_1 = require('./purchase/purchase.module');
var middle_wrapper_component_1 = require('./middle-wrapper.component');
var home_middle_content_component_1 = require('./home content/home-middle-content.component');
var product_component_1 = require('./product/product.component');
var middle_content_component_1 = require('./main content/middle-content.component');
var search_content_component_1 = require('./search content/search-content.component');
var empty_result_component_1 = require('./shared/empty-result.component');
var product_modal_component_1 = require('./shared/product-modal.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var routes = [{
        path: '',
        component: home_middle_content_component_1.HomeMiddleContentComponent
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
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }];
var MiddleWrapperModule = (function () {
    function MiddleWrapperModule() {
    }
    MiddleWrapperModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, purchase_module_1.PurchaseModule, router_1.RouterModule.forRoot(routes)],
            declarations: [middle_wrapper_component_1.MiddleWrapperComponent, home_middle_content_component_1.HomeMiddleContentComponent, product_component_1.ProductComponent,
                middle_content_component_1.MiddleContentComponent, search_content_component_1.SearchContentComponent, empty_result_component_1.EmptyResultComponent,
                product_modal_component_1.ProductModalComponent, sidebar_component_1.SidebarComponent],
            exports: [middle_wrapper_component_1.MiddleWrapperComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MiddleWrapperModule);
    return MiddleWrapperModule;
}());
exports.MiddleWrapperModule = MiddleWrapperModule;
//# sourceMappingURL=middle-wrapper.module.js.map