import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-icon-button-bordered',
  templateUrl: './icon-button-bordered.component.html',
  styleUrls: ['./icon-button-bordered.component.scss']
})
export class IconButtonBorderedComponent implements OnInit {
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  click(event: Event) {
    this.clicked.emit(event);
  }

}
