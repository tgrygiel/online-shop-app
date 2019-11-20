import { AppState, ShopState } from '../reducers';
import { createSelector } from '@ngrx/store';

const selectShopState = (state: AppState): ShopState => state.shop;

const selectIsProductDataLoaded = (state: AppState): boolean => state.shop.products.loaded;

// export const selectDataLoading = (state: any) => state.coreModule.case.caseInfo.loading;

export const selectIsProductsLoading = createSelector(
    selectShopState,
    (shopState) => shopState.products.loading
);

export const selectProducts = createSelector(
    selectShopState,
    selectIsProductDataLoaded,
    (shopState, isDataLoaded) => isDataLoaded ? shopState.products.data : []
);

export const selectCart = createSelector(
    selectShopState,
    (shopState) => shopState.cart
);
