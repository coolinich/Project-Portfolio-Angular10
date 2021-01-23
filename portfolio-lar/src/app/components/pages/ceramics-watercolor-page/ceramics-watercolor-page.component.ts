import { Component, OnInit } from '@angular/core';
import { ImagesDescription } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'pkl-ceramics-watercolor-page',
  templateUrl: './ceramics-watercolor-page.component.html',
  styleUrls: ['./ceramics-watercolor-page.component.scss']
})
export class CeramicsWatercolorPageComponent implements OnInit {
  watercolorPageSettings: ImagesDescription;
  
  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.watercolorPageSettings = {
      templateHeading: "Some watercolor masterpieces",
      templateText: "Something about them",
      templateImages: this.imageService.getImagesByPage('CERAMIC_WATERCOLOR_PAGE')
    }
  }

}
