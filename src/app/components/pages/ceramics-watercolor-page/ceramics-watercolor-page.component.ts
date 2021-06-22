import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Image, ImagesDescription } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'pkl-ceramics-watercolor-page',
  templateUrl: './ceramics-watercolor-page.component.html',
  styleUrls: ['./ceramics-watercolor-page.component.scss']
})
export class CeramicsWatercolorPageComponent implements OnInit, OnDestroy {
  watercolorPageSettings: ImagesDescription;
  showPreloader: boolean = true;

  private readonly activePageSubject$ = new Subject();
  
  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.watercolorPageSettings = {
      templateHeading: "CERAMICS_WATERCOLOR_PAGE.heading",
      templateText: "CERAMICS_WATERCOLOR_PAGE.description",
      templateImages: []
    }

    this.imageService.getImagesByKeyValue('imagePage', 'CERAMIC_WATERCOLOR_PAGE')
    .pipe(takeUntil(this.activePageSubject$))
    .subscribe(
      (imagesFromDB: Image[] | any[]) => {
        this.watercolorPageSettings.templateImages= imagesFromDB;
        this.showPreloader = false;
      }
    )

  }

  ngOnDestroy() {
    this.activePageSubject$.next();
  }
}
