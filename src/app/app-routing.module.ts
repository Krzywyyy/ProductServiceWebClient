import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EfficientProductsComponent } from './product/efficient-products/efficient-products.component';
import { BrokenProductsComponent } from './product/broken-products/broken-products.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products/broken', component: BrokenProductsComponent},
  {path: 'products/efficient', component: EfficientProductsComponent},
  {path: 'products/add',component: AddProductComponent},
  {path: 'products/delete',component: DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
