import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/model';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private http: HttpService) { }

  products: Observable<Array<Product>> = this.http.getAllProducts();

  product: Product = new Product();
  
  ngOnInit() {
  }

  delete(){
    this.http.deleteProduct(this.product.id);
  }
}
