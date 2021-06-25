import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavbarComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'pkl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('navbar', {static: true}) navbar: NavbarComponent;

  constructor(
    private renderer: Renderer2
  ) {
    this.renderer.listen('body', 'click', (e: Event) => {
      if (this.navbar.shown && !this.navbar.el.nativeElement.contains(e.target)) {
        this.navbar.toggle();
      }
    })
  }

}
