import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ImageService } from 'src/app/services/image.service';
import { ImagesDescription } from 'src/app/interfaces/image';
import { Image } from 'src/app/interfaces/image';

import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'pkl-ceramic-interior-page',
  templateUrl: './ceramic-interior-page.component.html',
  styleUrls: ['./ceramic-interior-page.component.scss']
})
export class CeramicInteriorPageComponent implements OnInit {
  interiorPageSettings: ImagesDescription = {
    templateHeading: "Heading",
    templateText: "Some text",
    templateImages: []
  };
  images: any[];

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private location: Location,
    private db: AngularFireDatabase
  ) { 
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.interiorPageSettings = {
      templateHeading: "Heading",
      templateText: "Some text",
      templateImages: [] //this.imageService.getImagesByPage('INTERIORS_PAGE')
                      //    .filter((image: Image) => image?.imageTag === id)
    }

    this.imageService.getImagesByKeyValue('imagePage', 'INTERIORS_PAGE')
    .subscribe(
      (data: Image[] | any[]) => {
        console.log(data);
        this.interiorPageSettings.templateImages = data
        .filter((image: Image) => image?.imageTag === id)
        // .map((image: Image) => {
        //   const newImage = {...image};
        //   newImage.imageAddress = 'https://firebasestorage.googleapis.com/v0/b/cool-gallery-4b872.appspot.com/o/' + encodeURIComponent(image.imageAddress) + '?alt=media'; //seems, not needed &token=5825a350-e093-4d2a-b4ab-f506d7f59f93'
        //   return newImage;
        // });
      }
    )
  }

  goBack() {
    this.location.back();
  }

}
