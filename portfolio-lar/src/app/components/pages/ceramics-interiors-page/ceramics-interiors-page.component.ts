import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ImagesDescription } from 'src/app/interfaces/image';
import { Image } from 'src/app/interfaces/image';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pkl-ceramics-interiors-page',
  templateUrl: './ceramics-interiors-page.component.html',
  styleUrls: ['./ceramics-interiors-page.component.scss']
})
export class CeramicsInteriorsPageComponent implements OnInit {
  interiorDesciptions: Image[];
  tileCaption$ = this.translateService.stream("CERAMICS_INTERIORS_PAGE.categories_title");
  tileDefaultCaption: string = '';
  

  constructor(
    private imageService: ImageService,
    private translateService: TranslateService
  ) {
    this.translateService.get("CERAMICS_INTERIORS_PAGE.categories_title")
    .subscribe(translatedCaption => this.tileDefaultCaption = translatedCaption);
  }

  ngOnInit(): void {
    this.imageService.getImagesByKeyValue('imagePage', 'INTERIORS_PAGE')
    .subscribe(
      (data: Image[] | any[]) => {
        this.interiorDesciptions = data
        .filter((image: Image) => image?.imageId === 1)
        .map((image: Image, index: number) => {
          return {
            ...image,
            imageCaption: this.tileDefaultCaption + (index + 1)  
          }
        }) 
      }
    )

    this.tileCaption$.subscribe(translatedCaption => {
        this.interiorDesciptions = this.interiorDesciptions ? this.interiorDesciptions.map((image: Image, index: number) => {
        return {
          ...image,
          imageCaption: translatedCaption + (index + 1)  
        }
      }) : [];
    });

  }
}
