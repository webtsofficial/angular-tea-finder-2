import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-introduction-speech',
  templateUrl: './introduction-speech.component.html',
  styleUrls: ['./introduction-speech.component.scss']
})
export class IntroductionSpeechComponent implements OnInit {
  @Input() step: number;
  @Output() maxStep = new EventEmitter();
  maximumStep = 3;

  constructor() {
    this.maxStep.emit(this.maximumStep);
    this.maxStep.subscribe((e) => {console.log(e);});
  }

  ngOnInit() {
  }
  checkStep = (stepIndex: number): boolean => {
    if(stepIndex === this.step) {
      this.initTypedJs();
      return true;
    } else {
      return false;
    }
  };
  initTypedJs(): void {
    const typed = new Typed('.typed', {
      stringsElement: '#typed-string',
      smartBackspace: true,
      typeSpeed: 30,
      backDelay: 1000
    });
  }
}
