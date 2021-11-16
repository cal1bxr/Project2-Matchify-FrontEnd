import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  tracks: any = '';

  constructor(private songService: SongService, private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginService.getRefreshToken(this.loginService.accessToken, this.loginService.refreshToken, this.loginService.code);
    this.songService.getSongs().subscribe((response) => {this.tracks=response;
      console.log(this.tracks);})
   
  }
}

