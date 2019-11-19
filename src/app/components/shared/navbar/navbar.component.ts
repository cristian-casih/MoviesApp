import { Component } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent {

  arraySearch: any;
  constructor(public _ms: MoviesService,
              public router: Router) {

  }

  searchMovie(text: string) {

    if (text.length == 0) {
      return;
    }
    this.router.navigate(['search', text])
  }
}
