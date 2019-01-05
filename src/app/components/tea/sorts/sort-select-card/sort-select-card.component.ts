import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sort} from '../../../../models/tea/sort/Sort';

@Component({
  selector: 'app-sort-select-card',
  templateUrl: './sort-select-card.component.html',
  styleUrls: ['./sort-select-card.component.scss']
})
export class SortSelectCardComponent implements OnInit {
  @Input() sort: Sort;
  @Output() sortSelected = new EventEmitter();

  selected = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSelect(): void {
    this.selected = !this.selected;
    this.sortSelected.emit(this.selected);
  }

}
