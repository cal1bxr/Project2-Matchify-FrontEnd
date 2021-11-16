import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorites } from '../models/favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }

  getAllFavorites(){
    return this.http.get<Favorites[]>('http://localhost:8081/data/favorites');
  }
}
