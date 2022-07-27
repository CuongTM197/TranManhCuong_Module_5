import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FuramaComponent} from "./furama/furama/furama.component";


const routes: Routes = [
  {
    path: '', component: FuramaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
