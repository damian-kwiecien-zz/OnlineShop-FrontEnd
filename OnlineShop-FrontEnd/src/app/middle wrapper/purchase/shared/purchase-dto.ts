import { PurchaserDataDTO } from './purchaser-data-dto';
import { ShoppingCartItemDTO } from './shopping-cart-item-dto';

export class PurchaseDTO {
    Shipping: number;
    ProductsCost: number;
    PurchaserDataDTO: PurchaserDataDTO;
    ShoppingCartItemDTOs: ShoppingCartItemDTO[];
    
}
