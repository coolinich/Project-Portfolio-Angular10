import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ImagesDescription } from 'src/app/interfaces/image';

@Component({
  selector: 'pkl-carousel-page-template',
  templateUrl: './carousel-page-template.component.html',
  styleUrls: ['./carousel-page-template.component.scss']
})
export class CarouselPageTemplateComponent implements OnInit {
  @Input() templateSettings: ImagesDescription;
  @Input() customTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void { }

}
