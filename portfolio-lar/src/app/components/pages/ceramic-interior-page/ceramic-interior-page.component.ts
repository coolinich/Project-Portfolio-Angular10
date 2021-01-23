import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ImageService } from 'src/app/services/image.service';
import { ImagesDescription } from 'src/app/interfaces/image';
import { Image } from 'src/app/interfaces/image';


@Component({
  selector: 'pkl-ceramic-interior-page',
  templateUrl: './ceramic-interior-page.component.html',
  styleUrls: ['./ceramic-interior-page.component.scss']
})
export class CeramicInteriorPageComponent implements OnInit {
  interiorPageSettings: ImagesDescription;

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.interiorPageSettings = {
      templateHeading: "Heading",
      templateText: "Some text",
      templateImages: this.imageService.getImagesByPage('INTERIORS_PAGE').filter((image: Image) => image?.imageTag === id)
    }
  }

  goBack() {
    this.location.back();
  }

}
