import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';
import { Damage } from 'src/app/model/model';

@Component({
  selector: 'app-solved-damages',
  templateUrl: './solved-damages.component.html',
  styleUrls: ['./solved-damages.component.css']
})
export class SolvedDamagesComponent implements OnInit {

  constructor(private http: HttpService) { }

  damages: Observable<Array<Damage>> = this.http.getAllSolvedReports();

  ngOnInit() {
  }

}
