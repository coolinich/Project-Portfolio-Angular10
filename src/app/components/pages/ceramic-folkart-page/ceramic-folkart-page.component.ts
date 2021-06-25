import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Image, ImagesDescription } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'pkl-ceramic-folkart-page',
  templateUrl: './ceramic-folkart-page.component.html',
  styleUrls: ['./ceramic-folkart-page.component.css']
})
export class CeramicFolkartPageComponent implements OnInit {
  folkartPageSettings: ImagesDescription;
  imagesList: Subscription;

  private readonly activePageSubject$ = new Subject();

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.folkartPageSettings = {
      templateHeading: "CERAMICS_FOLKART_PAGE.heading",
      templateText: "CERAMICS_FOLKART_PAGE.description",
      templateImages: []
    }

    this.imagesList = this.imageService.getImagesByKeyValue('imagePage', 'CERAMIC_FALKART_PAGE')
    .pipe(takeUntil(this.activePageSubject$))
    .subscribe(
      (imagesFromDB: Image[] | any[]) => {
        this.folkartPageSettings.templateImages = imagesFromDB;
      }
    )
  }

  ngOnDestroy() {
    this.activePageSubject$.next();
  }

}
