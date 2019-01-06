import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-introduction-speech',
  templateUrl: './introduction-speech.component.html',
  styleUrls: ['./introduction-speech.component.scss']
})
export class IntroductionSpeechComponent implements OnInit {
  step = 1;

  constructor() { }

  ngOnInit() {
    const typed = new Typed('.typed', {
      stringsElement: '#typed-string',
      smartBackspace: true,
      typeSpeed: 30,
      backDelay: 1000
    });
  }

  nextStep(): void {
    this.step++;
  }
}
