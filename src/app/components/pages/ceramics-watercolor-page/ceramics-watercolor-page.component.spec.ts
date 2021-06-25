import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicsWatercolorPageComponent } from './ceramics-watercolor-page.component';

describe('CeramicsWatercolorPageComponent', () => {
  let component: CeramicsWatercolorPageComponent;
  let fixture: ComponentFixture<CeramicsWatercolorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicsWatercolorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicsWatercolorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
