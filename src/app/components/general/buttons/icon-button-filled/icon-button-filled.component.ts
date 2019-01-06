import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-button-filled',
  templateUrl: './icon-button-filled.component.html',
  styleUrls: ['./icon-button-filled.component.scss']
})
export class IconButtonFilledComponent implements OnInit {
  @Input() label: string;
  @Input() iconClass: string;

  constructor() { }

  ngOnInit() {
  }

}
