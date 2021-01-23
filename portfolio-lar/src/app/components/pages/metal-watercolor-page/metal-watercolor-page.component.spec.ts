import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalWatercolorPageComponent } from './metal-watercolor-page.component';

describe('MetalWatercolorPageComponent', () => {
  let component: MetalWatercolorPageComponent;
  let fixture: ComponentFixture<MetalWatercolorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalWatercolorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalWatercolorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
