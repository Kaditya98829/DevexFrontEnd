import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  usersList: Array<any> = [];
  users: Array<any> = [];
  updateData = {
    name: 'Aditya Kumar Choudhary',
    email: 'apptest@mail.com'
  }

  registerUser:{
    name: string,
    email: string,
    password: string
   } = {
    name: '',
    email: '',
    password: ''
   }
index: any;
isFormUpdated: any;
  constructor(private sharedService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
 getUsers () {
  this.sharedService.getUsersList().subscribe((res:any) => {
    this.usersList = res.data;
    this.users = res;
  }
  )
 }
 getIndex($event:any, i: any) {
 this.index = i;
 }
  update() {
  this.sharedService.
  updateUserData(this.usersList[this.index]._id, this.registerUser)
  .subscribe(()=> this.getUsers()
  )
  }
  deleteUser($event:any, index:any) {
  this.sharedService.deleteUserData(this.usersList[index]._id).subscribe(() => this.getUsers())
  }
}
