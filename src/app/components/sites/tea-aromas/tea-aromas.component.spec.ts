import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaAromasComponent } from './tea-aromas.component';

describe('TeaAromasComponent', () => {
  let component: TeaAromasComponent;
  let fixture: ComponentFixture<TeaAromasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaAromasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaAromasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
