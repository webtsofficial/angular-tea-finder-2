import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Typed from 'typed.js';
import {LogService} from '../../../../services/logging/log.service';

@Component({
  selector: 'app-introduction-speech',
  templateUrl: './introduction-speech.component.html',
  styleUrls: ['./introduction-speech.component.scss']
})
export class IntroductionSpeechComponent implements AfterViewInit {

  constructor(
      public logService: LogService
  ) {
  }

  ngAfterViewInit(): void {
    this.initTypedJs('.typed', '#typed-strings');
  }
  initTypedJs(typedId: string, stringId: string): void {
    const typedIntroduction = new Typed(typedId, {
      stringsElement: stringId,
      smartBackspace: true,
      typeSpeed: 50
    });
  }
}
