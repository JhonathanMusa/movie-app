import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchmovieService } from 'src/app/services/fetchmovie.service';
import { Movie } from '../details/interface/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  results: Movie[] = []
  movie!: string
  title = "movie-app"
  constructor(private fetchmovieService: FetchmovieService, private router: Router) { }

  ngOnInit(): void {
  }

  search() {

    this.fetchmovieService.getMovies(this.movie)
      .subscribe((data) => {
        // console.log(data.Search);
        this.results = data.Search
      })

  }

  details(id: string) {
    // console.log(id);
    this.router.navigate(['details', id])

  }
}
