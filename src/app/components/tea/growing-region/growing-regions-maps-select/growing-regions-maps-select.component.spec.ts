import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingRegionsMapsSelectComponent } from './growing-regions-maps-select.component';

describe('GrowingRegionsMapsSelectComponent', () => {
  let component: GrowingRegionsMapsSelectComponent;
  let fixture: ComponentFixture<GrowingRegionsMapsSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowingRegionsMapsSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingRegionsMapsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
