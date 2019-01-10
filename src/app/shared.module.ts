import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HeightEqualsWidthDirective} from './directives/general/styling/height-equals-width/height-equals-width.directive';
import {IconButtonFilledComponent} from './components/general/buttons/icon-button-filled/icon-button-filled.component';
import {IconButtonBorderedComponent} from './components/general/buttons/icon-button-bordered/icon-button-bordered.component';
import {FinderControlsComponent} from './components/finder/finder-controls/finder-controls.component';
import {LogService} from './services/logging/log.service';

@NgModule({
  declarations: [
    HeightEqualsWidthDirective,
      IconButtonFilledComponent,
      IconButtonBorderedComponent,
      FinderControlsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      HeightEqualsWidthDirective,
      IconButtonFilledComponent,
      IconButtonBorderedComponent,
      FinderControlsComponent
  ]
})
export class SharedModule {}
