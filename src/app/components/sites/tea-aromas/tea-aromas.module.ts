import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeaAromasRoutingModule} from './tea-aromas-routing.module';
import {TeaAromasComponent} from './tea-aromas.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
    declarations: [
        TeaAromasComponent
    ],
    imports: [
        CommonModule,
        TeaAromasRoutingModule,
        SharedModule
    ]
})
export class TeaAromasModule {
}
