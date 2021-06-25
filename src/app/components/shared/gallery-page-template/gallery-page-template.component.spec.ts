import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPageTemplateComponent } from './gallery-page-template.component';

describe('GalleryPageTemplateComponent', () => {
  let component: GalleryPageTemplateComponent;
  let fixture: ComponentFixture<GalleryPageTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPageTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
