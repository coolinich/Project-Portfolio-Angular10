import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'pkl-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() image: Image;
  @ViewChild('basicModal', {static: true}) public imageModal;
  noImage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal() {
    this.imageModal.show();
  }

  showPlaceholder() {
    this.noImage = true;
  }

}
