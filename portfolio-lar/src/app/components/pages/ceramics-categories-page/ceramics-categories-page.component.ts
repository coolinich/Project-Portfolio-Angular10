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
  routesToCategoriesPages = {
    1: "sculptures",
    2: "panels",
    3: "folkart",
    4: "interiors",
    5: "decor",
    6: "watercolor"
  }

  constructor(
    private imageService: ImageService
  ) {
    this.categoriesDesciptions = this.imageService.getAssetsImagesByPage('CERAMICS_PAGE');
  }

  ngOnInit(): void {
  }

}
