import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/interfaces/image';


@Component({
  selector: 'pkl-ceramics-categories-page',
  templateUrl: './ceramics-categories-page.component.html',
  styleUrls: ['./ceramics-categories-page.component.scss']
})
export class CeramicsCategoriesPageComponent implements OnInit {
  categoriesDesciptions: Image[];

  constructor(
    private imageService: ImageService
  ) {
    this.categoriesDesciptions = this.imageService.getImagesByPage('CERAMICS_PAGE');
  }

  ngOnInit(): void {
  }

}
