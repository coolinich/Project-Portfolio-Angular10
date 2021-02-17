import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesPlaceholderComponent } from './images-placeholder.component';

describe('ImagesPlaceholderComponent', () => {
  let component: ImagesPlaceholderComponent;
  let fixture: ComponentFixture<ImagesPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
