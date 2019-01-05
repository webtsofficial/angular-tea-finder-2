import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingRegionInformationComponent } from './growing-region-information.component';

describe('GrowingRegionInformationComponent', () => {
  let component: GrowingRegionInformationComponent;
  let fixture: ComponentFixture<GrowingRegionInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowingRegionInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingRegionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
