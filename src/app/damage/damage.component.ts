import { Component, OnInit } from '@angular/core';
import { Damage } from '../model/model';
import { HttpService } from '../service/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.css']
})
export class DamageComponent implements OnInit {

  constructor(private http: HttpService) { }

  damages: Observable<Array<Damage>> = this.http.getAllReports();

  damage: Damage = new Damage();
  
  ngOnInit() {
  }

}
