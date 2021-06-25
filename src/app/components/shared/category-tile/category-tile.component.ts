import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'pkl-category-tile',
  templateUrl: './category-tile.component.html',
  styleUrls: ['./category-tile.component.scss']
})
export class CategoryTileComponent implements OnInit {
  @Input() categoryImage: Image;
  @Input() categoryRoute: string;

  constructor() { }

  ngOnInit(): void {
  }

}
