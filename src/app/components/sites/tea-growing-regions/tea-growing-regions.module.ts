import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeaGrowingRegionsRoutingModule} from './tea-growing-regions-routing.module';
import {TeaGrowingRegionsComponent} from './tea-growing-regions.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
    declarations: [
        TeaGrowingRegionsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TeaGrowingRegionsRoutingModule
    ]
})
export class TeaGrowingRegionsModule {
}
