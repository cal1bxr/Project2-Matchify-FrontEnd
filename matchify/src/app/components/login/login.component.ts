import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  code: string | undefined;
  text: string = "Click to Login"
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    
  }

  getAuth(){
    this.loginService.getAuthorization();
  }

}
