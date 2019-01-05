import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaSortsComponent } from './tea-sorts.component';

describe('TeaSortsComponent', () => {
  let component: TeaSortsComponent;
  let fixture: ComponentFixture<TeaSortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaSortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaSortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
