import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   registerUser:{
    name: string,
    email: string,
    password: string
   } = {
    name: '',
    email: '',
    password: ''
   }
  constructor(private sharedService: UserService,
    private route: Router) { }

  ngOnInit(): void {
  }
  register() {
    try {
      if(this.registerUser.email === ''
       && this.registerUser.password === ''
        && this.registerUser.name === '') {
          return console.log('please enter the credentials')
        }
      this.sharedService.registerUser(this.registerUser).subscribe();
      this.route.navigateByUrl('/login');
    } catch (error: any) {
      console.log(error.message)
    }
  }
}
