import {ObjectId} from 'mongoose'
import { ProductCollection, ProductSize, ProductStatus } from "../enum/product.enum";

export interface Product {
    _id: ObjectId,
    productStatus: ProductStatus;
    productCollection:  ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize: ProductSize;
    productVolume: number;
    productDesc?: string;
    productImage: string[];
    productViews: number;


}

export interface ProductInquery {
    order: string,
    page: number,
    limit: number,
    productCollection?: ProductCollection,
    search?: string  
}


export interface ProductInput {
    productStatus?: ProductStatus;
    productCollection:  ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc?: string;
    productImage?: string[];
    productViews?: number;


}
export interface ProductUpdateInput {
    _id: ObjectId,
    productStatus?: ProductStatus;
    productCollection?:  ProductCollection;
    productName?: string;
    productPrice?: number;
    productLeftCount?: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc?: string;
    productImage?: string[];
    productViews?: number;


}