import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Image } from 'src/app/interfaces/image';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';

@Component({
  selector: 'pkl-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {
  @Input() image: Image;
  @ViewChild(ModalComponent) modalComponent: ModalComponent;
  loading: boolean = true;
  noImage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideLoader() {
    this.loading = false;
  }

  showPlaceholder() {
    this.noImage = true;
    this.hideLoader();
  }

  showFullImage() {
    this.modalComponent.showModal();
  }

}
