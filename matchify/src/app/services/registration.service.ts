import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../models/user"

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  postRegistration(user: User){
    this.http.post<any>('http://localhost:8081/data/users', user).subscribe((response)=>{console.log(response)});
  }
}
