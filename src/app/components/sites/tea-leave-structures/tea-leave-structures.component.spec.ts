import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaLeaveStructuresComponent } from './tea-leave-structures.component';

describe('TeaLeaveStructuresComponent', () => {
  let component: TeaLeaveStructuresComponent;
  let fixture: ComponentFixture<TeaLeaveStructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaLeaveStructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaLeaveStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
