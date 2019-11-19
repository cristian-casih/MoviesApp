import { Injectable } from '@angular/core';

import {formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlMovie: string = "https://api.themoviedb.org/3";
  private apiKey: string = "a018105180102ee4dd58a87a24587f75";

  constructor(private http: HttpClient) {

  }
  getPopular() {

    const url = `${this.urlMovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`
    return this.http.get(url)
      .pipe(map(resp => {
        return resp['results']
      }));

  };
  getMovie(id:string) {
    
    const url = `${this.urlMovie}/movie/${id}?api_key=${this.apiKey}&language=es`
    return this.http.get(url)
      .pipe(map(resp => {
        return resp
      }));

  };
  getPopularKids() {
    const url = `${this.urlMovie}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`
    return this.http.get(url)
      .pipe(map(resp => {
        return resp['results']
      }));

  };

  searchMovie(text: string) {
    const url = `${this.urlMovie}/search/movie?query=${text}/&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`
    return this.http.get(url)
      .pipe(map(resp => {
        return resp['results']
      }));
  }
  getMovieThetres() {
    let since = new Date();
    let until = new Date();
    let jssince = '';
    let jsuntil = '';

    jssince = formatDate(since, 'yyyy-MM-dd','en-US', '+0530');
    jsuntil = formatDate(until.setDate(until.getDate()+7), 'yyyy-MM-dd','en-US', '+0530');
    
    const url = `${this.urlMovie}/discover/movie?primary_release_date.gte=${jssince}&primary_release_date.lte=${jsuntil}&api_key=${this.apiKey}&language=es`
    return this.http.get(url)
      .pipe(map(resp => {
        return resp['results']
      }));
  }

}
