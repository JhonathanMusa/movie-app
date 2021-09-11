import { Component, OnInit } from '@angular/core';
import { FetchmovieService } from './services/fetchmovie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  results: any[] = []
  movie!: string
  title = 'movie-app';

  constructor(private fetchmovieService: FetchmovieService) { }

  ngOnInit() {

  }

  search() {
    // console.log(this.movie);

    this.fetchmovieService.getMovies(this.movie)
      .subscribe((data) => {
        console.log(data.Search);
        this.results = data.Search
      })

  }
}
