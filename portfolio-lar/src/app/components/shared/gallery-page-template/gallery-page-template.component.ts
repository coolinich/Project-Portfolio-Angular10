import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'pkl-gallery-page-template',
  templateUrl: './gallery-page-template.component.html',
  styleUrls: ['./gallery-page-template.component.scss']
})
export class GalleryPageTemplateComponent implements OnInit {
  @Input() templateImages: Image[];
  constructor() { }

  ngOnInit(): void {
  }

}
