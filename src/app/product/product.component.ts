import { Component, OnInit } from '@angular/core';
import { Product } from '../model/model';
import { HttpService } from '../service/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpService) { }

  products: Observable<Array<Product>> = this.http.getAllProducts();

  ngOnInit() {
  }

}
