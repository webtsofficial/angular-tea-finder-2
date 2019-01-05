import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonBorderedComponent } from './icon-button-bordered.component';

describe('IconButtonBorderedComponent', () => {
  let component: IconButtonBorderedComponent;
  let fixture: ComponentFixture<IconButtonBorderedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconButtonBorderedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonBorderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
