import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  urlImage='http://image.tmdb.org/t/p/w300'

  transform(images: any): string {

    if (!images) {
      return 'assets/noimage.png'
    }
    if (images.backdrop_path) {
      console.log(this.urlImage + images.backdrop_path);
      
      return this.urlImage + images.backdrop_path
    }else{
      if(images.poster_path)
      return this.urlImage + images.poster_path
    }
  }

}
