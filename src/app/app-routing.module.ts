import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/sites/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'teaSorts',
    loadChildren: './components/sites/tea-sorts/tea-sorts.module#TeaSortsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
