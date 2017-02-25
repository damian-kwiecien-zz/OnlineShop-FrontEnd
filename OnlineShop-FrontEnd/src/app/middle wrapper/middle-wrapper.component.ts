import { Component, OnInit, EventEmitter, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Product } from './shared/product';

import { ProductComponent } from './product/product.component'

@Component({
  selector: 'my-middle-wrapper',
  template: `
  <div #middleBackground class="middle-background">
    <div #middleContent class="middle-content">
      <router-outlet></router-outlet>
    </div>
  </div>`,
  styles: [`
  .middle-background {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(255,250,250,0.2);
  }
  
  .middle-content {
    position: absolute;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;
  }`]
})
export class MiddleWrapperComponent implements AfterViewChecked {

  @ViewChild('middleContent') middleContent: ElementRef;

  ngAfterViewChecked() {
    this.setMiddleBackgroundHeightLikeMiddleContentHeight();
  }

    // Jquery
  // Without it background will have wrong height
  private setMiddleBackgroundHeightLikeMiddleContentHeight() {
    $(function() { $('.middle-background').css('min-height', $('.middle-content').outerHeight(true))});
  }

 }