import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';

@Injectable({
    providedIn: 'root'
})
export class ProductApiService {
    private BASE_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    public getProducts() {
        return this.http.get<Product[]>(`${this.BASE_URL}/products`);
    }

    public getProduct(productId: Product['id']) {
        return this.http.get<Product>(`${this.BASE_URL}/products/${productId}`);
    }
}
