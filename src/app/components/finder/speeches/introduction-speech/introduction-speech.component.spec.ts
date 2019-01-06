import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionSpeechComponent } from './introduction-speech.component';

describe('IntroductionSpeechComponent', () => {
  let component: IntroductionSpeechComponent;
  let fixture: ComponentFixture<IntroductionSpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionSpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
