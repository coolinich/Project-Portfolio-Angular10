import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicFolkartPageComponent } from './ceramic-folkart-page.component';

describe('CeramicFolkartPageComponent', () => {
  let component: CeramicFolkartPageComponent;
  let fixture: ComponentFixture<CeramicFolkartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicFolkartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicFolkartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
