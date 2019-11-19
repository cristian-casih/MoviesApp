import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  dataMovie: any[] = [];
  dataMovieKids: any[] = [];
  dataMovieThetres:any[]=[];
  loading = true;


  constructor(private _ms: MoviesService) {

  }

  ngOnInit() {
    
    this.getMovies();
    this.getMoviesKids();
    this.getMovieTheatres();
    this.loading=false;
  }

  getMovies() {
    
    this._ms.getPopular()
      .subscribe(data => {
        this.dataMovie = data;
        
      })
  }
  getMoviesKids() {
    this._ms.getPopularKids()
      .subscribe(data => {
        this.dataMovieKids = data;
      
      })
  }
  getMovieTheatres() {

    this._ms.getMovieThetres()
      .subscribe(data => {
        this.dataMovieThetres=data;
        
      })
  }
}
