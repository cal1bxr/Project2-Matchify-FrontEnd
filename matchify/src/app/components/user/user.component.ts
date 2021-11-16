import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
// title = JSON.parse(sessionStorage.getItem('username')!);
title: string = "";
email: string = "";
img: null | undefined;
spotifyId: string = "";
  
  // users: User[] = [];
  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.userService.getCurrentUserInfo().subscribe(
      ((response: any)=> {console.log(response);
        this.title = response.body.display_name;
                          this.email = response.body.email;
                          this.img = response.body.images[0].url;
                          this.spotifyId = response.body.id;
   }
    ));

    this.loginService.getRefreshToken(this.loginService.accessToken, this.loginService.refreshToken, this.loginService.code);     
  }

  getRecommended(id: string){
    
  }
}
