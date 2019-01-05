import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesInformationComponent } from './properties-information.component';

describe('PropertiesInformationComponent', () => {
  let component: PropertiesInformationComponent;
  let fixture: ComponentFixture<PropertiesInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
