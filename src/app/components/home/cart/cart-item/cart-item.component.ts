import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CartItem } from 'src/app/model/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;
  constructor() { }

  ngOnInit() {
  }

}
