import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pkl-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() imageURL: string;
  @ViewChild('basicModal', {static: true}) public imageModal;
  
  constructor() { }

  ngOnInit(): void {
  }

  showModal() {
    this.imageModal.show();
  }

}
