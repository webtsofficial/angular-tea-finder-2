import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/sites/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'teaSorts',
        loadChildren: './components/sites/tea-sorts/tea-sorts.module#TeaSortsModule'
    },
    {
        path: 'teaGrowingRegions',
        loadChildren: './components/sites/tea-growing-regions/tea-growing-regions.module#TeaGrowingRegionsModule'
    },
    {
        path: 'teaAromas',
        loadChildren: './components/sites/tea-aromas/tea-aromas.module#TeaAromasModule'
    },
    {
        path: 'teaProperties',
        loadChildren: './components/sites/tea-properties/tea-properties.module#TeaPropertiesModule'
    },
    {
        path: 'teaLeaveStructures',
        loadChildren: './components/sites/tea-leave-structures/tea-leave-structures.module#TeaLeaveStructuresModule'
    },
    {
        path: 'teaPlucking',
        loadChildren: './components/sites/tea-plucking/tea-plucking.module#TeaPluckingModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
