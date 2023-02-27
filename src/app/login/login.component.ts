import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser = {
    email: '',
    password: ''
  }
  constructor(private sharedService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginUser = {
      email: '',
      password: ''
    }
  }

  login() {
      this.sharedService.getLogin(this.loginUser)
      .then(() =>this.router.navigateByUrl('/dashboard'))
      .catch(err => console.log(err.response.data.message))
   }
}
