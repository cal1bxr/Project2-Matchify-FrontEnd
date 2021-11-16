import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Favorites } from 'src/app/models/favorites';
import { User } from 'src/app/models/user';
import { FavoritesService } from 'src/app/services/favorites.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

allFavs : Favorites[] = [];
userFavs : Favorites[] = [];
useremail : string = '';

  constructor(private loginService: LoginService, private favService: FavoritesService, private userService: UserService) { }

  ngOnInit(): void {

    this.loginService.getRefreshToken(this.loginService.accessToken, this.loginService.refreshToken, this.loginService.code);
    this.getFavorites();
    this.setUserFavorites(this.allFavs);
  }

 getFavorites() {
    this.favService.getAllFavorites().subscribe(
      (response: Favorites[]) => {
        this.allFavs = response;
      }
    )
    
  }

  setUserFavorites(all: Favorites[]){

    this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.email; console.log(response)})
    for(let temp of all){
      if(temp.email === this.useremail){
        this.userFavs.push(temp);
      }
    }
  }

}
