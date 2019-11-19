import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MoviesService } from './services/movies.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ImagePipe } from './pipes/image.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { GirdComponent } from './components/home/gird.component';
import { LoadingComponent } from './components/shared/loading/loading.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ImagePipe,
    MovieComponent,
    GirdComponent,
    LoadingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
