import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderControlsComponent } from './finder-controls.component';

describe('FinderControlsComponent', () => {
  let component: FinderControlsComponent;
  let fixture: ComponentFixture<FinderControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinderControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
