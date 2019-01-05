import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluckingInformationComponent } from './plucking-information.component';

describe('PluckingInformationComponent', () => {
  let component: PluckingInformationComponent;
  let fixture: ComponentFixture<PluckingInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluckingInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluckingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
