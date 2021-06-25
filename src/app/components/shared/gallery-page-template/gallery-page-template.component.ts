import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ImagesDescription } from 'src/app/interfaces/image';

@Component({
  selector: 'pkl-gallery-page-template',
  templateUrl: './gallery-page-template.component.html',
  styleUrls: ['./gallery-page-template.component.scss']
})
export class GalleryPageTemplateComponent implements OnInit {
  @Input() templateSettings: ImagesDescription;
  @Input() customTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
