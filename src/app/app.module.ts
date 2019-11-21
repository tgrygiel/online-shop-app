import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderItemComponent } from './components/header/header-item/header-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/home/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routes } from './app-routing-module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { CartItemComponent } from './components/home/cart/cart-item/cart-item.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderItemComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([...effects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
