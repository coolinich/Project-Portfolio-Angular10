import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Image, ImagesDescription } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'pkl-ceramic-panels-page',
  templateUrl: './ceramic-panels-page.component.html',
  styleUrls: ['./ceramic-panels-page.component.scss']
})
export class CeramicPanelsPageComponent implements OnInit {
  panelsPageSettings: ImagesDescription;
  imagesList: Subscription;

  private readonly activePageSubject$ = new Subject();

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.panelsPageSettings = {
      templateHeading: "CERAMICS_PANELS_PAGE.heading",
      templateText: "CERAMICS_PANELS_PAGE.description",
      templateImages: []
    }

    this.imagesList = this.imageService.getImagesByKeyValue('imagePage', 'CERAMIC_PANELS_PAGE')
    .pipe(takeUntil(this.activePageSubject$))
    .subscribe(
      (imagesFromDB: Image[] | any[]) => {
        this.panelsPageSettings.templateImages = imagesFromDB;
      }
    )
  }

  ngOnDestroy() {
    this.activePageSubject$.next();
  }
}
