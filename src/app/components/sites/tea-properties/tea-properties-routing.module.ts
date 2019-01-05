import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeaPropertiesComponent} from './tea-properties.component';

const routes: Routes = [
    {path: '', component: TeaPropertiesComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeaPropertiesRoutingModule {
}
