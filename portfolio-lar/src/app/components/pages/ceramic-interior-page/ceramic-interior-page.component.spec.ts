import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicInteriorPageComponent } from './ceramic-interior-page.component';

describe('CeramicInteriorPageComponent', () => {
  let component: CeramicInteriorPageComponent;
  let fixture: ComponentFixture<CeramicInteriorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicInteriorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicInteriorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
