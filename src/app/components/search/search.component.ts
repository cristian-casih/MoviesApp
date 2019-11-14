import { Component } from '@angular/core';
import { MoviesService } from './../../services/movies.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  searchMovie:any;

  constructor(private _ms:MoviesService) {

  }
  search(text:string){
    console.log(text);

    this._ms.searchMovie(text)
      .subscribe(data => {       
        this.searchMovie=data;
        console.log(this.searchMovie);
        
      })
    
  }

}
