import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-finder-controls',
  templateUrl: './finder-controls.component.html',
  styleUrls: ['./finder-controls.component.scss']
})
export class FinderControlsComponent implements OnInit {
  @Output() submit = new EventEmitter();
  @Output() skip = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitted(event): void {
    this.submit.emit(event);
  }
  skipped(event): void {
    this.skip.emit(event);
  }
  canceled(event): void {
    this.cancel.emit(event);
  }

}
