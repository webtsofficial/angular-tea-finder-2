import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonFilledComponent } from './icon-button-filled.component';

describe('IconButtonFilledComponent', () => {
  let component: IconButtonFilledComponent;
  let fixture: ComponentFixture<IconButtonFilledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconButtonFilledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
