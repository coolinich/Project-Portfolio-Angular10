import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalCategoriesPageComponent } from './metal-categories-page.component';

describe('MetalCategoriesPageComponent', () => {
  let component: MetalCategoriesPageComponent;
  let fixture: ComponentFixture<MetalCategoriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalCategoriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
