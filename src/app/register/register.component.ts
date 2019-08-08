import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { User } from '../model/model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpService) { }

  user:User = new User();

  ngOnInit() {
  }

  signUp() {
    this.http.register(this.user).subscribe();
  }
}
