import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeaGrowingRegionsRoutingModule} from './tea-growing-regions-routing.module';
import {TeaGrowingRegionsComponent} from './tea-growing-regions.component';
import {SharedModule} from '../../../shared.module';
import {GrowingRegionsMapsSelectComponent} from '../../tea/growing-region/growing-regions-maps-select/growing-regions-maps-select.component';

@NgModule({
    declarations: [
        TeaGrowingRegionsComponent,
        GrowingRegionsMapsSelectComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TeaGrowingRegionsRoutingModule
    ]
})
export class TeaGrowingRegionsModule {
}
