import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { Damage } from 'src/app/model/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report-fix',
  templateUrl: './report-fix.component.html',
  styleUrls: ['./report-fix.component.css']
})
export class ReportFixComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) { }

  damages: Observable<Array<Damage>> = this.http.getAllUnsolvedReports();

  damage: Damage = new Damage();

  ngOnInit() {
  }

  reportFix(){
    this.http.reportFix(this.damage.id).subscribe(
      success => this.router.navigate(['/reports'])
    )
  }

}
