import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PurchaseModule } from './purchase/purchase.module';

import { MiddleWrapperComponent } from './middle-wrapper.component';
import { HomeMiddleContentComponent } from './home content/home-middle-content.component';
import { ProductComponent } from './product/product.component';
import { MiddleContentComponent } from './main content/middle-content.component';
import { SearchContentComponent } from './search content/search-content.component';
import { EmptyResultComponent } from './shared/empty-result.component';
import { ProductModalComponent } from './shared/product-modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [{
    path: '',
    component: HomeMiddleContentComponent
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
},
{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
}];

@NgModule({
    imports: [CommonModule, PurchaseModule, RouterModule.forRoot(routes)],
    declarations: [MiddleWrapperComponent, HomeMiddleContentComponent, ProductComponent,
        MiddleContentComponent, SearchContentComponent, EmptyResultComponent,
        ProductModalComponent, SidebarComponent],
    exports: [MiddleWrapperComponent]
})
export class MiddleWrapperModule { }

