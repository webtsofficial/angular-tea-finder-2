import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeaLeaveStructuresRoutingModule} from './tea-leave-structures-routing.module';
import {TeaLeaveStructuresComponent} from './tea-leave-structures.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
    declarations: [
        TeaLeaveStructuresComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TeaLeaveStructuresRoutingModule
    ]
})
export class TeaLeaveStructuresModule {
}
