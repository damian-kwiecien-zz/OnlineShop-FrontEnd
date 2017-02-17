import { Component } from '@angular/core';

@Component({
  selector: 'my-bottom-wrapper',
  templateUrl: 'app/bottom wrapper/bottom-wrapper.component.html',
  styles: [`
  .bottom-background {
    position: relative;
    width: 100%;
    height: 60%;
    background-image: url("/assets/images/backgrounds/bg6.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .bottom-content {
    position: absolute;
    width: 100%;
  }
  
  .bottom-content > nav {
    height: 100%;
  }
  
  nav {
    text-align: center;
    margin-top: 15%;
  }
  
  .btn-group {
    font-size: xx-large;
  }`]
})
export class BottomWrapperComponent { }