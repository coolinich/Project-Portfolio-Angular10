import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'pkl-carousel-page-template',
  templateUrl: './carousel-page-template.component.html',
  styleUrls: ['./carousel-page-template.component.scss']
})
export class CarouselPageTemplateComponent implements OnInit {
  @Input() templateImages: Image[];
  constructor() { }

  ngOnInit(): void {
  }

}
