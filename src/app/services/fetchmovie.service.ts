import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http"
import { map } from "rxjs/operators"
import { Search, Welcome } from '../models/movies.models';


@Injectable({
  providedIn: 'root'
})
export class FetchmovieService {
  apiKey: string = "1989edaf"
  baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getMovies(movie: string) {
    const url = `${this.baseUrl}/?apikey=${this.apiKey}&s=${movie}`
    return this.http.get<Welcome>(url)
      .pipe(
        map(resp => {
          return resp.Search
        })
      )
  }

  getMovie(id: string) {
    const url = `${this.baseUrl}/?apikey=${this.apiKey}&i=${id}`
    return this.http.get<Search>(url)
  }
}
