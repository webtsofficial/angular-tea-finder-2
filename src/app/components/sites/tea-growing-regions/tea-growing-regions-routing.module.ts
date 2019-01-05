import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeaGrowingRegionsComponent} from './tea-growing-regions.component';

const routes: Routes = [
    {path: '', component: TeaGrowingRegionsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeaGrowingRegionsRoutingModule {
}
