import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicSculpturesPageComponent } from './ceramic-sculptures-page.component';

describe('CeramicSculpturesPageComponent', () => {
  let component: CeramicSculpturesPageComponent;
  let fixture: ComponentFixture<CeramicSculpturesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicSculpturesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicSculpturesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
