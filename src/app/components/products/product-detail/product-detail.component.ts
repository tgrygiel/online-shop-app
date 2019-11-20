import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/Product';
import { Observable, Subject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { AddProductToCart } from 'src/app/store/actions/shop.actions';
import { withLatestFrom, tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  private addToCart$: Subject<void> = new Subject();
  private subscription = new Subscription();

  constructor(private route: ActivatedRoute, private productService: ProductApiService, private store: Store<AppState>) { }

  ngOnInit() {
    const productId = this.route.snapshot.params.id;
    this.product$ = this.productService.getProduct(productId);
    this.initAddToCart();
  }

  onAddToCart() {
    console.log('onAddToCart')
    this.addToCart$.next();
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
