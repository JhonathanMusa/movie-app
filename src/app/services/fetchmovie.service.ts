import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http"

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
}
