import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeaPropertiesRoutingModule} from './tea-properties-routing.module';
import {TeaPropertiesComponent} from './tea-properties.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
    declarations: [
        TeaPropertiesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TeaPropertiesRoutingModule
    ]
})
export class TeaPropertiesModule {
}
