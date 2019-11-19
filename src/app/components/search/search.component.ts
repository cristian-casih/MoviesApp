import { Component } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent{

  searchMovie:any;
  paramsText:any;
  loading:boolean;

  constructor(public _ms:MoviesService,
              public route:ActivatedRoute,
              public router:Router) {

                this.route.params.subscribe(params=>{
                  if(params['text']){
                    this.paramsText=params['text']
                    this.search(params['text'])
                  }
                })
  }
  search(text:string){
    this.loading=true;

    this._ms.searchMovie(text)
      .subscribe(data => { 
        this.searchMovie=data;
        this.loading=false;
      })
    
  }
 movieOne(search :any){

    let id=search.id
    this.router.navigate(['movie',id,'search',this.paramsText]);
    
  } 
}