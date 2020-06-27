import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  protected urlService: string = "http://localhost:3000/";

  constructor (private httpClient: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.urlService + 'produtos');
  }
}