import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Image, ImagesDescription } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'pkl-ceramic-sculptures-page',
  templateUrl: './ceramic-sculptures-page.component.html',
  styleUrls: ['./ceramic-sculptures-page.component.scss']
})
export class CeramicSculpturesPageComponent implements OnInit, OnDestroy {
  sculpturesPageSettings: ImagesDescription;
  imagesList: Subscription;

  private readonly activePageSubject$ = new Subject();

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.sculpturesPageSettings = {
      templateHeading: "CERAMICS_SCULPTURES_PAGE.heading",
      templateText: "CERAMICS_SCULPTURES_PAGE.description",
      templateImages: []
    }

    this.imagesList = this.imageService.getImagesByKeyValue('imagePage', 'CERAMIC_SCULPTURES_PAGE')
    .pipe(takeUntil(this.activePageSubject$))
    .subscribe(
      (imagesFromDB: Image[] | any[]) => {
        this.sculpturesPageSettings.templateImages = imagesFromDB;
      }
    )
  }

  ngOnDestroy() {
    this.activePageSubject$.next();
  }

}
