import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicsInteriorsPageComponent } from './ceramics-interiors-page.component';

describe('PortfolioWallartsComponent', () => {
  let component: CeramicsInteriorsPageComponent;
  let fixture: ComponentFixture<CeramicsInteriorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicsInteriorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicsInteriorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
