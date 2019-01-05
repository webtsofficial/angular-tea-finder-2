import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeaSortsRoutingModule} from './tea-sorts-routing.module';
import {TeaSortsComponent} from './tea-sorts.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
    declarations: [
        TeaSortsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TeaSortsRoutingModule
    ]
})
export class TeaSortsModule {
}
