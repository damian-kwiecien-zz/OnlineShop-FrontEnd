import { ProductImages } from './product-images';

export class Product {
        Id: number;

        Name: string;

        Price: number;

        Description: string;

        Details: string;

        ImgUrl: string;

        Target: string;

        Category: string;

        Type: string;

        ProductImages: ProductImages[];
}

