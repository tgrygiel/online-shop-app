import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ShopActionTypes, LoadProductsSuccess, LoadProductsError } from '../actions/shop.actions';
import { ProductApiService } from 'src/app/services/product.service';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable()
export class ShopEffects {

    @Effect()
    LoadProducts$ = this.actions$.pipe(
        ofType(ShopActionTypes.LoadProducts),
        mergeMap(() => this.productService.getProducts().pipe(
            map((products) => new LoadProductsSuccess(products)),
            catchError((error: HttpErrorResponse) => of(new LoadProductsError(error)))
        ))
    );

    constructor(private actions$: Actions, private productService: ProductApiService) {}
}
