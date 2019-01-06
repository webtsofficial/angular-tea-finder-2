import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HeightEqualsWidthDirective} from './directives/general/styling/height-equals-width/height-equals-width.directive';
import {IconButtonFilledComponent} from './components/general/buttons/icon-button-filled/icon-button-filled.component';
import {IconButtonBorderedComponent} from './components/general/buttons/icon-button-bordered/icon-button-bordered.component';

@NgModule({
  declarations: [
    HeightEqualsWidthDirective,
      IconButtonFilledComponent,
      IconButtonBorderedComponent
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
      IconButtonBorderedComponent
  ]
})
export class SharedModule {}
