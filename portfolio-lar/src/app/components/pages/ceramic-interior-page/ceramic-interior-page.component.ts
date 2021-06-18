import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ImageService } from 'src/app/services/image.service';
import { ImagesDescription } from 'src/app/interfaces/image';
import { Image } from 'src/app/interfaces/image';

import { AngularFireDatabase } from '@angular/fire/database';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'pkl-ceramic-interior-page',
  templateUrl: './ceramic-interior-page.component.html',
  styleUrls: ['./ceramic-interior-page.component.scss']
})
export class CeramicInteriorPageComponent implements OnInit, OnDestroy {
  interiorPageSettings: ImagesDescription = {
    templateHeading: "Heading",
    templateText: "Some text",
    templateImages: []
  };
  images: any[];

  private readonly activePagesubject$ = new Subject();


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
      templateImages: []
    }

    this.imageService.getImagesByKeyValue('imagePage', 'INTERIORS_PAGE')
    .pipe(takeUntil(this.activePagesubject$))
    .subscribe(
      (data: Image[] | any[]) => {
        this.interiorPageSettings.templateImages = data
        .filter((image: Image) => image?.imageTag === id)
      }
    )
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.activePagesubject$.next();
  }

}
