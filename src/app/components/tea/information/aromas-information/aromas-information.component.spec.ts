import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AromasInformationComponent } from './aromas-information.component';

describe('AromasInformationComponent', () => {
  let component: AromasInformationComponent;
  let fixture: ComponentFixture<AromasInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AromasInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AromasInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
