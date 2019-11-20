import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { selectProducts } from 'src/app/store/selectors/shop.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(selectProducts));
  }

}
