import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MoviesService } from './services/movies.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ImagePipe } from './pipes/image.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,

    NavbarComponent,

    ImagePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
