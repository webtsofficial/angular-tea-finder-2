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

  constructor(private sortsService: SortsService) {
    this.sorts = this.sortsService.getAll();
  }

  ngOnInit() {
  }

}
