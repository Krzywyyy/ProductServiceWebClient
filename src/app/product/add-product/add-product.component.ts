import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory, Parameter } from 'src/app/model/model';
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

  parameter: Parameter = new Parameter();

  parameters: Array<Parameter> = new Array<Parameter>();

  ngOnInit() {
  }

  addParamToList(){
    let param: Parameter = new Parameter();
    param.name = this.parameter.name;
    param.value = this.parameter.value;

    this.parameters.push(param)
  }

  addNewProduct(){
    this.product.parameters = this.parameters;

    this.http.addProduct(this.product).subscribe(
      success => {
        this.router.navigate(['/products']);
      }
    )
  }
}
