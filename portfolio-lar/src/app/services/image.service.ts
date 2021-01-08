import { Injectable } from '@angular/core';
import { ALL_IMAGES } from 'src/assets/constants';
import { Image } from 'src/app/interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  allImages: Image[] = [];

  constructor() { }

  getImagesAll(): Image[] {
    return this.allImages = ALL_IMAGES.slice();
  }

  getImagesByPage(pageTitle: string): Image[] {
    this.getImagesAll();
    return this.allImages.filter(image => image.imagePage === pageTitle);
  }

}
