import { Component, Input } from '@angular/core';
import { Product } from './product';

import { ShoppingCartService } from '../../core/shopping-cart.service';

@Component({
  selector: 'my-product-modal',
  template: `

  <!-- Modal, displays when user chose particular product -->
  <div class="modal fade" id="{{id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div class="row">
          <div class="col-md-4">
            <img src="{{ product?.ImgUrl }}" class="img-responsive thumbnail" alt="Cinque Terre">
          </div>
          <div class="col-md-8">
            <div class="page-header">
              <h2>{{ product?.Name }}
                <br>
                <span class="label label-warning">Hot</span>  <small>{{ product?.Price }}$</small></h2>
            </div>

            <h3 class="product-rating"><i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i>              <i class="fa fa-star-o"></i>
            </h3>
            <div class="panel-group" id="{{panelGroupId}}" role="tablist" aria-multiselectable="true">
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="{{panelHeadingIds[0]}}">
                  <h4 class="panel-title">
                    <a role="button" data-toggle="collapse" [attr.data-parent]="'#'+panelGroupId" href="{{divHrefs[0]}}" aria-expanded="true" [attr.aria-controls]="'#'+divIds[0]">
          Description
        </a>
                  </h4>
                </div>
                <div id="{{divIds[0]}}" class="panel-collapse collapse in" role="tabpanel" [attr.aria-labelledby]="panelHeadingIds[0]">
                  <div class="panel-body">
                    {{ product?.Description }}
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="{{panelHeadingIds[1]}}">
                  <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" [attr.data-parent]="'#'+panelGroupId" href="{{divHrefs[1]}}" aria-expanded="false"
                      [attr.aria-controls]="divIds[1]">
                      Details
                      </a>
                  </h4>
                </div>
                <div id="{{divIds[1]}}" class="panel-collapse collapse" role="tabpanel" [attr.aria-labelledby]="panelHeadingIds[1]">
                  <div class="panel-body">
                    {{ product?.Details }}
                  </div>
                </div>
              </div>
            </div>

            <div (click)="addToCart($event)" class="btn-group cart">
              <button type="button" class="btn btn-success">
							Add to cart 
						</button>
            </div>
            <div (click)="addToCart($event)" class="btn-group wishlist">
              <button type="button" class="btn btn-danger">
							Add to wishlist 
						</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>`,
  styles: [`
  .modal-content {
    padding: 20px;
    margin: 5%;
        }
  .modal-dialog {
    width: auto;
  }`]
})
export class ProductModalComponent {
  @Input() public product: Product;
  @Input() public id: string;
  panelGroupId: string = this.id + 'Accordion';
  panelHeadingIds: string[] = [this.id + 'HeadingOne', this.id + 'HeadingTwo'];
  divIds: string[] = [this.id + 'CollapseOne', this.id + 'CollapseTwo'];
  divHrefs: string[] = ['#' + this.divIds[0], '#' + this.divIds[1]];


  constructor(private cartService: ShoppingCartService) { }

  addToCart(event: any) {
    this.cartService.addItem(this.product);
  }

}