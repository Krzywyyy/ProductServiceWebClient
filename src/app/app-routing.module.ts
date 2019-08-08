import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EfficientProductsComponent } from './product/efficient-products/efficient-products.component';
import { BrokenProductsComponent } from './product/broken-products/broken-products.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { DamageComponent } from './damage/damage.component';
import { SolvedDamagesComponent } from './damage/solved-damages/solved-damages.component';
import { UnsolvedDamagesComponent } from './damage/unsolved-damages/unsolved-damages.component';
import { ReportDamageComponent } from './damage/report-damage/report-damage.component';
import { ReportFixComponent } from './damage/report-fix/report-fix.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products/broken', component: BrokenProductsComponent},
  {path: 'products/efficient', component: EfficientProductsComponent},
  {path: 'products/add',component: AddProductComponent},
  {path: 'products/delete',component: DeleteProductComponent},
  {path: 'reports', component: DamageComponent},
  {path: 'reports/solved', component: SolvedDamagesComponent},
  {path: 'reports/unsolved', component: UnsolvedDamagesComponent},
  {path: 'reports/add', component: ReportDamageComponent},
  {path: 'reports/fix', component: ReportFixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
