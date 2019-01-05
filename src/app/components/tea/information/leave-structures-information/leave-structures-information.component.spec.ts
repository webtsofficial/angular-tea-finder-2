import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveStructuresInformationComponent } from './leave-structures-information.component';

describe('LeaveStructuresInformationComponent', () => {
  let component: LeaveStructuresInformationComponent;
  let fixture: ComponentFixture<LeaveStructuresInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveStructuresInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveStructuresInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
