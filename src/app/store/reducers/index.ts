
import { environment } from '../../../environments/environment';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Product } from '../../model/Product';
import { Cart } from '../../model/Cart';
import { ShopActions, ShopActionTypes } from '../actions/shop.actions';

export interface ShopState {
  products: {
    data: Product[];
    loading: boolean,
    loaded: boolean
  };
  cart: Cart;
}

const initialShopState: ShopState = {
  products: {
    data: [],
    loaded: false,
    loading: false
  },
  cart: {
    items: [],
    totalSum: 0
  }
};

export interface AppState {
  shop: ShopState;
}

export function productReducer(state: ShopState = initialShopState, action: ShopActions): ShopState {
  switch (action.type) {
    case ShopActionTypes.LoadProducts:
      return {
        ...state,
        products: {
          ...state.products,
          loading: true
        }
      };

    case ShopActionTypes.LoadProductsSuccess:
      return {
        ...state,
        products: {
          ...state.products,
          data: action.products,
          loading: false,
          loaded: true
        }
      };

    case ShopActionTypes.LoadProductsError:
      return {
        ...state,
        products: {
          ...state.products,
          loading: false
        }
      };

    case ShopActionTypes.AddProductToCart:
      const cartItemWithNewProduct = state.cart.items.find(cartItem => cartItem.product.id === action.product.id);
      return {
        ...state,
        cart: {
          totalSum: state.cart.totalSum + action.product.price,
          items: [
            ...state.cart.items.filter(cartItem => cartItem.product.id !== action.product.id),
            cartItemWithNewProduct ?
              { ...cartItemWithNewProduct, quantity: cartItemWithNewProduct.quantity + 1 } :
              { product: action.product, quantity: 1 }
          ]
        }
      };

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  shop: productReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
