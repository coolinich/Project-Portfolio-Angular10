import { Inject, Injectable } from '@angular/core';
import { ALL_IMAGES } from 'src/assets/constants';
import { Image } from 'src/app/interfaces/image';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  allImages: Image[] = [];

  images: Image[];


  constructor(private db: AngularFireDatabase, @Inject(FirebaseApp) fbApp)  {   
    // TEST Firebase DB
    // const rootDBref = fbApp.database().ref();
    // rootDBref.child('Images/2').on('value', shapshot => console.log(shapshot.val()));
    
  }

  getAssetsImagesAll(): Image[] {
    return this.allImages = ALL_IMAGES.slice();
  }

  getAssetsImagesByPage(pageTitle: string): Image[] {
    this.getAssetsImagesAll();
    return this.allImages.filter(image => image.imagePage === pageTitle);
  }

  getAllImagesDB():Observable<Image[] | any[]> {
    return this.db.list('Images').valueChanges();
  }

  getImagesByKeyValue(key: string, value: string): Observable<Image[] | any[]> {
    return this.db.list('Images', ref => ref.orderByChild(key).equalTo(value)).valueChanges()
  }

}
