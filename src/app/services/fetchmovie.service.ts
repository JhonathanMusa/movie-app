import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Movie } from '../components/details/interface/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchmovieService {
  apiKey: string = "1989edaf"
  baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getMovies(movie: string) {
    return this.http.get<any>(`${this.baseUrl}/?apikey=${this.apiKey}&s=${movie}`)
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/?apikey=${this.apiKey}&i=${id}`)
  }
}
