import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataMovie: any[] = [];
  dataMovieKids:any[]=[];
  loading = false;

  constructor(private _ms: MoviesService) {

  }

  ngOnInit() {
    this.getMovies();
    this.getMoviesKids();
  }

  getMovies() {

    this._ms.getPopular()
      .subscribe(data => {
        this.dataMovie = data;
        console.log(this.dataMovie)
      })
  }
  getMoviesKids(){
    this._ms.getPopularKids()
        .subscribe(data=>{
          this.dataMovieKids=data;
          
        })
  }
}
