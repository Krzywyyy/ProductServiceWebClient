import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product, User, Damage } from '../model/model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token')
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

  getOneProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'products/' + productId, { headers: httpOptions.headers });
  }

  deleteProduct(productId: number) {
    return this.http.delete<void>(this.baseUrl + 'products/' + productId, { headers: httpOptions.headers });
  }

  reportDamage(damage: Damage): Observable<Damage> {
    return this.http.post<Damage>(this.baseUrl + 'reports/add', damage, { headers: httpOptions.headers });
  }

  reportFix(damageId: number): Observable<Damage> {
    console.log(httpOptions.headers)
    return this.http.post<Damage>(this.baseUrl + 'reports/fix/' + damageId, null, { headers: httpOptions.headers });
  }

  getAllReports(): Observable<Array<Damage>> {
    return this.http.get<Array<Damage>>(this.baseUrl + 'reports', { headers: httpOptions.headers });
  }

  getAllSolvedReports(): Observable<Array<Damage>> {
    return this.http.get<Array<Damage>>(this.baseUrl + 'reports/solved', { headers: httpOptions.headers });
  }

  getAllUnsolvedReports(): Observable<Array<Damage>> {
    return this.http.get<Array<Damage>>(this.baseUrl + 'reports/unsolved', { headers: httpOptions.headers });
  }
}
