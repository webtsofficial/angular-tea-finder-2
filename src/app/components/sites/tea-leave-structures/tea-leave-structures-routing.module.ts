import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeaLeaveStructuresComponent} from './tea-leave-structures.component';

const routes: Routes = [
    {path: '', component: TeaLeaveStructuresComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeaLeaveStructuresRoutingModule {
}
