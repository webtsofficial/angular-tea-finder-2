import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaGrowingRegionsComponent } from './tea-growing-regions.component';

describe('TeaGrowingRegionsComponent', () => {
  let component: TeaGrowingRegionsComponent;
  let fixture: ComponentFixture<TeaGrowingRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaGrowingRegionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaGrowingRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
