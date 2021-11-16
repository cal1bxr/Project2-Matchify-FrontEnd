import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artists: any = '';

  constructor(private loginService: LoginService, private artistService: ArtistService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.getRefreshToken(this.loginService.accessToken, this.loginService.refreshToken, this.loginService.code);
    this.artistService.getArtists().subscribe((response) => {this.artists=response;
    },
    (error: any) => {console.log("Http error: ", error);
                  if(error.status == 503){
                    this.router.navigate(['error'])
                  }});

    for(let artist of this.artists){
      console.log(artist);
    }
  }

}
