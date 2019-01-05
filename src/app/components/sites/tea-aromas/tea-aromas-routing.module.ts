import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeaAromasComponent} from './tea-aromas.component';

const routes: Routes = [
    {path: '', component: TeaAromasComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeaAromasRoutingModule {
}
