import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeaPluckingComponent} from './tea-plucking.component';

const routes: Routes = [
    {path: '', component: TeaPluckingComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeaPluckingRoutingModule {
}
