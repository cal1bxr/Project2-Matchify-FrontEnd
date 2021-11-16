import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const AUTHORIZE = 'https://accounts.spotify.com/authorize';
const SCOPES: string = "user-read-private%20user-read-recently-played%20user-follow-read%20user-top-read%20user-read-email";
const redirectUri = 'http://localhost:4200/home';
const clientId = 'bd65c2a1c20245dda47c526d5fb90a2b';
const clientSecret = '8380aa9e99324cfc8477e329b444f3ff';
const httpOptions: { headers: any; observe: any; } = {
  headers: new HttpHeaders()
  .set('Content-Type', 'application/x-www-form-urlencoded')
  .set('Authorization', 'Basic ' + btoa(clientId + ':' + clientSecret)),
  observe: 'response'
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  accessToken!: string;
  refreshToken!: string;
  code!: string;
  constructor(private http: HttpClient, private router: Router) { }

  getAuthorization(){
    let url = AUTHORIZE;
    url += '?client_id='+ clientId;
    url += '&response_type=code';
    url += '&redirect_uri='+ redirectUri;
    url += '&show_dialog=true';
    url += '&scope=' + SCOPES;
    console.log(url);
    
    window.location.href = url;  
  }

  

  getToken(){  
    let win = window.location.href;
    let winSplit = win.split('=', 2);
    this.code = winSplit[1]; 
    
    const body = new HttpParams()
      .set('code', this.code)
      .set('redirect_uri', redirectUri)
      .set('grant_type', 'authorization_code');

    this.http.post('https://accounts.spotify.com/api/token', body, httpOptions).subscribe(
      (response: any)=>{ this.accessToken = response.body.access_token;
        this.refreshToken = response.body.refresh_token;
      return this.accessToken, this.refreshToken, this.code});
  }

  getRefreshToken(accessToken: string, refreshToken: string, code: string){
    console.log(code);
    
    const body = new HttpParams()
    .set('grant_type', 'refresh_token')
    .set('refresh_token', refreshToken)
    .set('access_token', accessToken);
    

    this.http.post('https://accounts.spotify.com/api/token', body, httpOptions).subscribe(
      (response: any) => { accessToken = response.body.access_token;},
      (error: any)=> {console.log("Http error: ", error);
                      this.router.navigate(['login']);    
    })}
}
