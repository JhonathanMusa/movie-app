import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchmovieService } from 'src/app/services/fetchmovie.service';
import { Movie } from './interface/movie.interface';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',

})
export class DetailsComponent implements OnInit {
  id!: string
  movie: any = {}

  constructor(private route: ActivatedRoute, private fetchmovieService: FetchmovieService) {
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


  ngOnInit() {
  }



}
