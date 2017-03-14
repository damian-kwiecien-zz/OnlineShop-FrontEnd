import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './core/auth.module'

import { TopWrapperModule } from './top wrapper/top-wrapper.module';
import { MiddleWrapperModule } from './middle wrapper/middle-wrapper.module';
import { BottomWrapperModule } from './bottom wrapper/bottom-wrapper.module';

import { AppComponent } from './app.component';

import { EqualValidator } from './core/equal-validator.directive';
import { AdminAuthGuard } from './core/admin-auth-guard';


@NgModule({
  imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, AuthModule,
    TopWrapperModule, MiddleWrapperModule, BottomWrapperModule],
  declarations: [AppComponent, EqualValidator],
  //entryComponents: [ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


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