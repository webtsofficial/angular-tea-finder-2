import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeaPluckingRoutingModule} from './tea-plucking-routing.module';
import {TeaPluckingComponent} from './tea-plucking.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
    declarations: [
        TeaPluckingComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TeaPluckingRoutingModule
    ]
})
export class TeaPluckingModule {
}
