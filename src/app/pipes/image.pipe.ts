import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  urlImage = 'http://image.tmdb.org/t/p/w300'

  transform(images: any, poster: boolean = false): string {
    if(poster){
      this.urlImage + images.poster_path
    }

    if (images.backdrop_path) {

      return this.urlImage + images.backdrop_path
    } else
      if (images.poster_path) {

        return this.urlImage + images.poster_path
      } else {
        return 'assets/noimage.png'

      }
  }
}


