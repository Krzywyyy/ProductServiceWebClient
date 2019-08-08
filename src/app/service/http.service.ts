import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product, User } from '../model/model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/';

  register(user: User) {
    return this.http.post(this.baseUrl + 'users/register', user);
  }

  login(user: User) {
    return this.http.post(this.baseUrl + 'users/login', user, { observe: 'response' })
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'products', product, { headers: httpOptions.headers });
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.baseUrl + 'products', { headers: httpOptions.headers });
  }

  getEfficientProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.baseUrl + 'products/efficient', { headers: httpOptions.headers });
  }

  getBrokenProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.baseUrl + 'products/broken', { headers: httpOptions.headers });
  }

  deleteProduct(productId: number) {
    this.http.delete(this.baseUrl + 'products/' + productId.toString(), { headers: httpOptions.headers });
  }
}
