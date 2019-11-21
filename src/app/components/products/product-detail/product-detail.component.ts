import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/Product';
import { Observable, Subject, Subscription, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { AddProductToCart } from 'src/app/store/actions/shop.actions';
import { withLatestFrom, tap, map, catchError, startWith } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  isLoading$: Observable<boolean>;
  private addToCart$: Subject<void> = new Subject();
  private subscription = new Subscription();

  isBlocked = false;

  constructor(private route: ActivatedRoute, private productService: ProductApiService, private store: Store<AppState>,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    const productId = this.route.snapshot.params.id;
    this.product$ = this.productService.getProduct(productId);

    this.initIsLoading();
    this.initAddToCart();
  }

  onAddToCart() {
    this.addToCart$.next();
  }

  private initIsLoading() {
    this.subscription.add(
      this.product$.pipe(
        map(product => !product),
        startWith(true),
        catchError(() => of(false))
      ).subscribe((isLoading) => {
        this.isBlocked = isLoading;
        isLoading ? this.spinner.show() : this.spinner.hide()
      })
    );
  }

  private initAddToCart() {
    this.subscription.add(
      this.addToCart$.pipe(
        withLatestFrom(this.product$),
        tap(([_, product]) => this.store.dispatch(new AddProductToCart(product)))
      ).subscribe()
    );
  }
}
