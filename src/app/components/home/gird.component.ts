import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-gird',
  templateUrl: './gird.component.html',
  styles: []
})
export class GirdComponent implements OnInit {

  @Input('movies') movies;
  @Input('title') title;

  constructor() { }

  ngOnInit() {
  }

}
