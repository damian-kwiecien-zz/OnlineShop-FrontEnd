import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostmanService {
  private searchParamSource = new Subject<string>();
  private searchParam$: Observable<string>;

  constructor() {
    this.searchParam$ = this.searchParamSource.asObservable();
  }

  sendSearchParam(searchParameter: string) {
    this.searchParamSource.next(searchParameter);
    //this.searchParamSource.complete();
    // DO NOT send complete() right below next() noob !!!!!!
    // SINGLE SERVICE INSTANCE !! REMEMBER
  }

  getSearchParam() {
    return this.searchParam$;
  }
}