import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';
import { Damage } from 'src/app/model/model';

@Component({
  selector: 'app-unsolved-damages',
  templateUrl: './unsolved-damages.component.html',
  styleUrls: ['./unsolved-damages.component.css']
})
export class UnsolvedDamagesComponent implements OnInit {

  constructor(private http: HttpService) { }

  damages: Observable<Array<Damage>> = this.http.getAllUnsolvedReports();

  ngOnInit() {
  }

}
