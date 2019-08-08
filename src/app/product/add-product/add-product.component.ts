import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory } from 'src/app/model/model';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private http:HttpService, private router:Router) { }

  product:Product = new Product();

  categories: Array<ProductCategory> = [
    ProductCategory.FRIDGE,
    ProductCategory.TV,
    ProductCategory.COOKER,
    ProductCategory.WASHER,
    ProductCategory.TOASTER,
    ProductCategory.IRON,
    ProductCategory.MONITOR,
    ProductCategory.COMPUTER,
    ProductCategory.NOTEBOOK
  ]

  ngOnInit() {
  }

  addNewProduct(){
    this.http.addProduct(this.product).subscribe(
      success => {
        this.router.navigate(['/products']);
      }
    )
  }
}
