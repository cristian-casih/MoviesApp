import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlMovie: string = "https://api.themoviedb.org/3";
  private apiKey: string = "a018105180102ee4dd58a87a24587f75";

  constructor(private http: HttpClient ) {

  }
  getPopular():Observable<any>  {

    const url = `${this.urlMovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`
    return this.http.get(url)
                    .pipe(map(resp=>{
                      return resp['results']
                    }));

  };
  getPopularKids(){
    const url = `${this.urlMovie}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`
    return this.http.get(url)
                    .pipe(map(resp=>{
                      return resp['results']
                    }));

  };

  searchMovie(text: string) {
    const url = `${this.urlMovie}/search/movie?query=${text}/&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`
    return this.http.get(url)
                    .pipe(map(resp=>{
                      return resp['results']
                    }));
  }
}
