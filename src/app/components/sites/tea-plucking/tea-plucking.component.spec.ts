import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaPluckingComponent } from './tea-plucking.component';

describe('TeaPluckingComponent', () => {
  let component: TeaPluckingComponent;
  let fixture: ComponentFixture<TeaPluckingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaPluckingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaPluckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
