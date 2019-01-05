import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortInformationComponent } from './sort-information.component';

describe('SortInformationComponent', () => {
  let component: SortInformationComponent;
  let fixture: ComponentFixture<SortInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
