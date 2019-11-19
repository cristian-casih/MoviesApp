import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: []
})
export class MovieComponent implements OnInit {
  movie: any;
  returnTo: string = "";
  searchMovie: string = "";
  loading:boolean=false;

  constructor(public _ms: MoviesService,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.pagMovie();
  }
  pagMovie() {

    this.route.params.subscribe(params => {
      this.loading=true;
      this.returnTo = params['pag'];

      if (params['searchMovie']) {

        this.searchMovie = params['searchMovie']
      }
      this._ms.getMovie(params['id'])
        .subscribe(movie => {
          this.movie = movie;
          this.loading=false;
        })
    })
  }
}
