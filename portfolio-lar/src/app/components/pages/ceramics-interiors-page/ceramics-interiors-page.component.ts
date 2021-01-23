import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ImagesDescription } from 'src/app/interfaces/image';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'pkl-ceramics-interiors-page',
  templateUrl: './ceramics-interiors-page.component.html',
  styleUrls: ['./ceramics-interiors-page.component.scss']
})
export class CeramicsInteriorsPageComponent implements OnInit {
  interiorDesciptions: Image[];
  routesToInteriorsPages = {
    1: "interior_1",
    2: "interior_2",
    3: "interior_3",
    4: "interior_4",
  }



  constructor(
    private imageService: ImageService
  ) {
    this.interiorDesciptions = this.imageService.getImagesByPage('INTERIORS_PAGE').filter((image: Image) => image?.imageId === 1);
  }

  ngOnInit(): void {
    
   }
}
