import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSelectProduct(): void {
    this.router.navigate(['home', 'product', this.product.id]);
  }

}
