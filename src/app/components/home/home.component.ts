import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from 'src/app/models/movies.models';
import { FetchmovieService } from 'src/app/services/fetchmovie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {
  results: Search[] = []
  movie!: string
  title = "Movie App"
  constructor(private fetchmovieService: FetchmovieService, private router: Router) { }

  search() {
    this.fetchmovieService.getMovies(this.movie)
      .subscribe(movies => {
        console.log(movies);
        this.results = movies
        this.movie = ""
      })
  }

  details(id: string) {
    console.log(id);
    this.router.navigate(['details', id])

  }
}
