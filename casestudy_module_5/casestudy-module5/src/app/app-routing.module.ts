import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditFacilityComponent} from "./service/edit-facility/edit-facility.component";
import {FuramaComponent} from "./furama/furama.component";
import {FacilityComponent} from "./service/facility/facility.component";
import {CustomerComponent} from "./customer-angular/customer/customer.component";
import {CreateCustomerComponent} from "./customer-angular/create-customer/create-customer.component";
import {CreateFacilityComponent} from "./service/create-facility/create-facility.component";
import {ContractComponent} from "./contract-angular/contract/contract.component";
import {CreateContractComponent} from "./contract-angular/create-contract/create-contract.component";
import {EditCustomerComponent} from "./customer-angular/edit-customer/edit-customer.component";



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
