import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsersList() {
    return this.http.get('/api/users');
  }
  registerUser(body:any) {
    return this.http.post<any>('/api/register/user', body)
  }
  getLogin(body: any) {
    const options = {
      url: '/api/login',
      data: body,
      method: 'post'
    }
  return axios(options)
  }

  updateUserData(id:any, data:any) {
    return this.http.put<any>(`/api/update/user/${id}`, data)
  }
  
  deleteUserData(id: any) {
    return this.http.delete<any>(`/api//delete/user/${id}`)
  }
}
