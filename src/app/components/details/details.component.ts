import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchmovieService } from 'src/app/services/fetchmovie.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']

})
export class DetailsComponent {
  id!: string
  movie: any = {}

  constructor(
    private route: ActivatedRoute,
    private fetchmovieService: FetchmovieService) { this.fetchMovies() }

  fetchMovies() {
    this.route.params.subscribe(params => {
      this.fetchmovieService.getMovie(params['id']).subscribe(
        res => {
          // console.log(res);
          this.movie = res
          console.log(this.movie);

        }
      )

    })
  }


}
