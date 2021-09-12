import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchmovieService } from 'src/app/services/fetchmovie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  results: any[] = []
  movie!: string
  title = "movie-app"
  constructor(private fetchmovieService: FetchmovieService, private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    // console.log(this.movie);
    this.fetchmovieService.getMovies(this.movie)
      .subscribe((data) => {
        console.log(data.Search);
        this.results = data.Search
      })

  }

  details(id: string) {
    // console.log(id);
    this.router.navigate(['/details', id])

  }
}
