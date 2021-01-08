import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'pkl-category-tile',
  templateUrl: './category-tile.component.html',
  styleUrls: ['./category-tile.component.scss']
})
export class CategoryTileComponent implements OnInit {
  @Input() categoryImage: Image;
  // categoryImage: Image = {
  //   imageAddress: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(54).jpg',
  //   imageCaption: 'Category 1'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
