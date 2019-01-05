import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResultsRoutingModule} from './results-routing.module';
import {SharedModule} from '../../../shared.module';
import {ResultsComponent} from './results.component';

@NgModule({
    declarations: [
        ResultsComponent
    ],
    imports: [
        CommonModule,
        ResultsRoutingModule,
        SharedModule
    ]
})
export class ResultsModule {
}
