import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { ProductApiService } from 'src/app/services/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { LoadProducts } from 'src/app/store/actions/shop.actions';
import { selectIsProductsLoading } from 'src/app/store/selectors/shop.selector';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  productsIsLoading$: Observable<boolean>;
  subscription = new Subscription();

  constructor(private store: Store<AppState>, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
    this.productsIsLoading$ = this.store.pipe(select(selectIsProductsLoading));

    this.subscription.add(
      this.productsIsLoading$.subscribe((isLoading) => isLoading ? this.spinner.show() : this.spinner.hide())
    );
  }
}
