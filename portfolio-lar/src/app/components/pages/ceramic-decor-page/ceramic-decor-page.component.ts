import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Image, ImagesDescription } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'pkl-ceramic-decor-page',
  templateUrl: './ceramic-decor-page.component.html',
  styleUrls: ['./ceramic-decor-page.component.scss']
})
export class CeramicDecorPageComponent implements OnInit, OnDestroy {
  decorPageSettings: ImagesDescription;
  imagesList: Subscription;

  private readonly activePageSubject$ = new Subject();

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.decorPageSettings = {
      templateHeading: "CERAMICS_DECOR_PAGE.heading",
      templateText: "CERAMICS_DECOR_PAGE.description",
      templateImages: []
    }

    this.imagesList = this.imageService.getImagesByKeyValue('imagePage', 'CERAMIC_DECOR_PAGE')
    .pipe(takeUntil(this.activePageSubject$))
    .subscribe(
      (imagesFromDB: Image[] | any[]) => {
        this.decorPageSettings.templateImages = imagesFromDB;
      }
    )
  }

  ngOnDestroy() {
    this.activePageSubject$.next();
  }

}
