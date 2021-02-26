import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tripImage'
})
export class TripImagePipe implements PipeTransform {

  transform(image: string): string {
    if(!image) {
      return 'assets/trip-default-image.jpg';
    } else {
      return image;
    }
  }

}
