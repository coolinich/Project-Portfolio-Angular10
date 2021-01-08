import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'pkl-portfolio-wallarts',
  templateUrl: './portfolio-wallarts.component.html',
  styleUrls: ['./portfolio-wallarts.component.scss']
})
export class PortfolioWallartsComponent implements OnInit {
  interiorImages: Image[];

  constructor( private imageService: ImageService ) {
    this.interiorImages = this.imageService.getImagesByPage('Interior_1');
  }

  ngOnInit(): void { }
}
