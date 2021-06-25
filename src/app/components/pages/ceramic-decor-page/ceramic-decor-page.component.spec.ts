import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicDecorPageComponent } from './ceramic-decor-page.component';

describe('CeramicDecorPageComponent', () => {
  let component: CeramicDecorPageComponent;
  let fixture: ComponentFixture<CeramicDecorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicDecorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicDecorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
