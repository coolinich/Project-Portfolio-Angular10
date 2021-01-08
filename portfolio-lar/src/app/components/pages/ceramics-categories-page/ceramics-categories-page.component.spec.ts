import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicsCategoriesPageComponent } from './ceramics-categories-page.component';

describe('CeramicsCategoriesPageComponent', () => {
  let component: CeramicsCategoriesPageComponent;
  let fixture: ComponentFixture<CeramicsCategoriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicsCategoriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicsCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
