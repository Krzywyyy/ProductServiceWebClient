import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TopNavbarComponent,
    ProductComponent,
    AddProductComponent,
    EfficientProductsComponent,
    BrokenProductsComponent,
    DeleteProductComponent,
    DamageComponent,
    SolvedDamagesComponent,
    UnsolvedDamagesComponent,
    ReportDamageComponent,
    ReportFixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
