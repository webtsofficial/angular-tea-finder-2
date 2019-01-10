import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  step = 1;
  maxStep: number;

  constructor(
      private router: Router
  ) {
  }

  ngOnInit() {
  }

  submit() {
    if(this.step < this.maxStep) {
      this.step++;
    } else {
      this.router.navigateByUrl('/teaSorts');
    }
  }
  skip() {
    this.router.navigateByUrl('/teaSorts');
  }
  cancel() {
    this.router.navigateByUrl('/canceled');
  }

  getMaxStep(max: number): void {
    this.maxStep = max;
  }

}
