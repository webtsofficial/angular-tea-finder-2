import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaPropertiesComponent } from './tea-properties.component';

describe('TeaPropertiesComponent', () => {
  let component: TeaPropertiesComponent;
  let fixture: ComponentFixture<TeaPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
