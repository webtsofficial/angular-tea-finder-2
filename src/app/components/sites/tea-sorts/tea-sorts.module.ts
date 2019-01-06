import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeaSortsRoutingModule} from './tea-sorts-routing.module';
import {TeaSortsComponent} from './tea-sorts.component';
import {SharedModule} from '../../../shared.module';
import {SortSelectCardComponent} from '../../tea/sorts/sort-select-card/sort-select-card.component';
import {FinderControlsComponent} from '../../finder/finder-controls/finder-controls.component';

@NgModule({
    declarations: [
        TeaSortsComponent,
        SortSelectCardComponent,
        FinderControlsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TeaSortsRoutingModule
    ]
})
export class TeaSortsModule {
}
