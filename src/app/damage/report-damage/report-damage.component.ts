import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Product, Damage } from 'src/app/model/model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-damage',
  templateUrl: './report-damage.component.html',
  styleUrls: ['./report-damage.component.css']
})
export class ReportDamageComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) { }

  products: Observable<Array<Product>> = this.http.getEfficientProducts();

  product: Product = new Product();

  damage: Damage = new Damage();

  ngOnInit() {
  }

  reportDamage(){
    console.log(this.damage.productId)
    return this.http.reportDamage(this.damage).subscribe(
      success => this.router.navigate(['/reports'])
    )
  }

}
