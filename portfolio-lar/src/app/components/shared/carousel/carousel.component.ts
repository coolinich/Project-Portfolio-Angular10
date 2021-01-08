import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'pkl-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: Image[];
  constructor() { }

  ngOnInit(): void {
  }

}
