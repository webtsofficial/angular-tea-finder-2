import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSelectCardComponent } from './sort-select-card.component';

describe('SortSelectCardComponent', () => {
  let component: SortSelectCardComponent;
  let fixture: ComponentFixture<SortSelectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortSelectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortSelectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
