import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Image } from 'src/app/interfaces/image';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';

@Component({
  selector: 'pkl-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images: Image[];
  @ViewChild(ModalComponent) modalComponent: ModalComponent;
  loading: boolean = true;
  public imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

  showFullImage(selectedImageUrl: string) {
      this.imageUrl = selectedImageUrl;
      this.modalComponent.showModal();
  }

  hideLoader() {
    this.loading = false;
  }

}
