import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Observable, Subscription } from 'rxjs';
import { Cart } from 'src/app/model/Cart';
import { selectCart } from 'src/app/store/selectors/shop.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: Observable<Cart>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.cart$ = this.store.pipe(select(selectCart));
  }
}
