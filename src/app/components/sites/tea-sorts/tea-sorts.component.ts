import { Component, OnInit } from '@angular/core';
import {Sort} from '../../../models/tea/sort/Sort';
import {SortsService} from '../../../services/tea/sorts/sorts.service';

@Component({
  selector: 'app-tea-sorts',
  templateUrl: './tea-sorts.component.html',
  styleUrls: ['./tea-sorts.component.scss']
})
export class TeaSortsComponent implements OnInit {

  sorts: Sort[];
  selectedSorts: Sort[] = [];

  constructor(private sortsService: SortsService) {
    this.sorts = this.sortsService.getAll();
  }

  ngOnInit() {
  }

  sortSelected(event: boolean, sort: Sort) {
    if (event) {
      // Sort is selected, add it to selectedSorts
      if(this.selectedSorts.filter(selectedSort => selectedSort.id === sort.id).length === 0) {
        this.selectedSorts.push(sort);
      }
    } else {
      // sort gets disselected, remove it from selectedSorts
      this.selectedSorts = this.selectedSorts.filter(selectedSort => selectedSort.id !== sort.id);
    }
  }

}
