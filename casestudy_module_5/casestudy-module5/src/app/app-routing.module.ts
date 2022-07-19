import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";
import {FuramaComponent} from "./furama/furama.component";
import {FacilityComponent} from "./facility/facility.component";
import {CustomerComponent} from "./customer/customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {CreateFacilityComponent} from "./create-facility/create-facility.component";
import {ContractComponent} from "./contract/contract.component";
import {CreateContractComponent} from "./create-contract/create-contract.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";



const routes: Routes = [
  {path:'',component: FuramaComponent},
  {path:'facility',component: FacilityComponent},
  {path: 'editFacility',component: EditFacilityComponent},
  {path: 'createFacility',component: CreateFacilityComponent},
  {path: 'customer',component: CustomerComponent},
  {path: 'createCustomer',component: CreateCustomerComponent},
  {path: 'editCustomer',component: EditCustomerComponent},
  {path: 'createContract',component: CreateContractComponent},
  {path: 'contract',component: ContractComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
