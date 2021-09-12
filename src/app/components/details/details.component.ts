import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchmovieService } from 'src/app/services/fetchmovie.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',

})
export class DetailsComponent implements OnInit {

  movie: any = {}

  constructor(private activatedRouter: ActivatedRoute, private fetchmovieService: FetchmovieService) {

  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      console.log(params['id']);
      this.movie = this.fetchmovieService.getMovie(params['id'])
      console.log(this.movie);
    })
  }


}
