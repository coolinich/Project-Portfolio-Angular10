import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPageTemplateComponent } from './carousel-page-template.component';

describe('CarouselPageTemplateComponent', () => {
  let component: CarouselPageTemplateComponent;
  let fixture: ComponentFixture<CarouselPageTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPageTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
