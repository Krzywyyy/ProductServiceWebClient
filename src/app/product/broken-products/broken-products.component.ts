import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/model';

@Component({
  selector: 'app-broken-products',
  templateUrl: './broken-products.component.html',
  styleUrls: ['./broken-products.component.css']
})
export class BrokenProductsComponent implements OnInit {

  constructor(private http: HttpService) { }

  products: Observable<Array<Product>> = this.http.getBrokenProducts();

  ngOnInit() {
  }

}
