import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/model';

@Component({
  selector: 'app-efficient-products',
  templateUrl: './efficient-products.component.html',
  styleUrls: ['./efficient-products.component.css']
})
export class EfficientProductsComponent implements OnInit {

  constructor(private http: HttpService) { }

  products: Observable<Array<Product>> = this.http.getEfficientProducts();

  ngOnInit() {
  }

}
