import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { User } from '../model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) { }

  user: User = new User();

  ngOnInit() {
  }

  signIn() {
    this.http.login(this.user).subscribe(
      resp => {
        sessionStorage.setItem('token', resp.headers.get('Authorization'));
        this.router.navigate(['/products']);
      }
    )
  }
}
