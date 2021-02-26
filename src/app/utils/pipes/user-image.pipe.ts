import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userImage'
})
export class UserImagePipe implements PipeTransform {

  transform(image: string): string {
    if(!image) {
      return 'assets/default-userimage.png';
    } else {
      return image;
    }
  }

}
