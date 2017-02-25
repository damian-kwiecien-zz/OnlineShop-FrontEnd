import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './core/auth.module'

import { AppComponent } from './app.component';
import { TopWrapperComponent } from './top wrapper/top-wrapper.component';
import { MiddleWrapperComponent } from './middle wrapper/middle-wrapper.component';
import { BottomWrapperComponent } from './bottom wrapper/bottom-wrapper.component';

import { HomeMiddleContentComponent } from './middle wrapper/home content/home-middle-content.component';
import { MiddleContentComponent } from './middle wrapper/main content/middle-content.component';
import { ShoppingCartComponent } from './middle wrapper/shopping cart/shopping-cart.component';
import { SearchContentComponent } from './middle wrapper/search content/search-content.component';

import { AccountModal } from './top wrapper/account modal/account-modal.component'
import { ProductComponent } from './middle wrapper/product/product.component';
import { SidebarComponent } from './middle wrapper/sidebar/sidebar.component';
import { EmptyResultComponent } from './middle wrapper/shared/empty-result.component';
import { ProductModalComponent } from './middle wrapper/shared/product-modal.component';

import { EqualValidator } from './core/equal-validator.directive';


const routes: Routes = [{
  path: '',
  component: MiddleWrapperComponent,
  children: [{
    path: '',
    component: HomeMiddleContentComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
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
  path: '**', 
  redirectTo:'', 
  pathMatch: 'full' 
}];

@NgModule({
  imports: [BrowserModule, HttpModule, JsonpModule, RouterModule.forRoot(routes), FormsModule, AuthModule],
  declarations: [AppComponent, TopWrapperComponent, MiddleWrapperComponent, BottomWrapperComponent,
    MiddleContentComponent, HomeMiddleContentComponent, ShoppingCartComponent, AccountModal, SearchContentComponent,
    EmptyResultComponent, SidebarComponent, ProductComponent, EqualValidator, ProductModalComponent],
  entryComponents: [ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
