import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeaSortsComponent} from './tea-sorts.component';

const routes: Routes = [
    {path: '', component: TeaSortsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeaSortsRoutingModule {
}
