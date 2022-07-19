import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";
import {FuramaComponent} from "./furama/furama.component";
import {FacilityComponent} from "./facility/facility.component";



const routes: Routes = [
  {path:'',component: FuramaComponent},
  {path:'facility',component: FacilityComponent},
  {path: 'editFacility',component: EditFacilityComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
