import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'my-sidebar',
  templateUrl: 'app/middle wrapper/sidebar/sidebar.component.html',
  styles: 
  [`body {
  margin-top: 50px;
}

.glyphicon {
  margin-right: 10px;
}

.panel-body {
  padding: 0px;
}

.panel-body table tr td {
  padding-left: 15px
}

.panel-body .table {
  margin-bottom: 0px;
}`]
})
export class SidebarComponent implements OnInit {
  heSelected: boolean = false;
  sheSelected: boolean = false;
  kidsSelected: boolean = false;

  private errorMessage: any;



  constructor(private router: Router) {
    this.heSelected = false;
    this.sheSelected = false;
    this.kidsSelected = false;
   }

  ngOnInit(): void {
    this.router.events.filter(e => e instanceof NavigationEnd)
      .subscribe(
      (e: NavigationEnd) => { this.prepareSidebar(e.url); },
      error => { this.errorMessage = <any>error });
  }

  private prepareSidebar(url: string): void {
    let tab = url.split('/');
    // First element is empty
    tab.shift();
    switch (tab[0]) {
      case "he":
        this.heSelected = true;
        this.sheSelected = false;
        this.kidsSelected = false;
        break;
      case "she":
        this.heSelected = false;
        this.sheSelected = true;
        this.kidsSelected = false;
        break;
      case "kids":
        this.heSelected = false;
        this.sheSelected = false;
        this.kidsSelected = true;
        break;
    }
  }

}