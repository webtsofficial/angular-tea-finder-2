import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-growing-regions-maps-select',
  templateUrl: './growing-regions-maps-select.component.html',
  styleUrls: ['./growing-regions-maps-select.component.scss']
})
export class GrowingRegionsMapsSelectComponent implements OnInit {
  @ViewChild('gmap') gmapElment: any;

  constructor() { }

  ngOnInit() {
  }

}
