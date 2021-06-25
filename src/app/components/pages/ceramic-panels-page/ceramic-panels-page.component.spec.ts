import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicPanelsPageComponent } from './ceramic-panels-page.component';

describe('CeramicPanelsPageComponent', () => {
  let component: CeramicPanelsPageComponent;
  let fixture: ComponentFixture<CeramicPanelsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicPanelsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicPanelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
