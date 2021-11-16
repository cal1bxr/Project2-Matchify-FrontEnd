import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ArtistComponent } from './components/artist/artist.component';

import { FavoritesComponent } from './components/favorites/favorites.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component'
import { SongComponent } from './components/song/song.component'
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'songs', component: SongComponent},
  {path: 'registration', component: RegistrationComponent},
  // {path: 'artists', component: ArtistComponent},
  {path: 'favorites', component: FavoritesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
