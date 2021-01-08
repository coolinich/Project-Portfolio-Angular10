import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWallartsComponent } from './portfolio-wallarts.component';

describe('PortfolioWallartsComponent', () => {
  let component: PortfolioWallartsComponent;
  let fixture: ComponentFixture<PortfolioWallartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioWallartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWallartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
