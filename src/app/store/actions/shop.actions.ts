import { Action } from '@ngrx/store';
import { Product } from 'src/app/model/Product';
import { HttpErrorResponse } from '@angular/common/http';

export enum ShopActionTypes {
    LoadProducts = '[Product] load products',
    LoadProductsSuccess = '[Product] load products success',
    LoadProductsError = '[Product] load products error',

    AddProductToCart = '[Product] - add product to cart'
}

export class LoadProducts implements Action {
    readonly type = ShopActionTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
    readonly type = ShopActionTypes.LoadProductsSuccess;

    constructor(public products: Product[]) {}
}

export class LoadProductsError implements Action {
    readonly type = ShopActionTypes.LoadProductsError;

    constructor(public error: HttpErrorResponse) {}
}

export class AddProductToCart implements Action {
    readonly type = ShopActionTypes.AddProductToCart;

    constructor(public product: Product) {}
}

export type ShopActions =
    LoadProducts |
    LoadProductsSuccess |
    LoadProductsError |
    AddProductToCart;
