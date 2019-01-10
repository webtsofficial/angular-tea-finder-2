import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-icon-button-filled',
  templateUrl: './icon-button-filled.component.html',
  styleUrls: ['./icon-button-filled.component.scss']
})
export class IconButtonFilledComponent implements OnInit {
  @Input() label: string;
  @Input() iconClass: string;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  click(event: Event): void {
    this.clicked.emit(event);
  }
}
