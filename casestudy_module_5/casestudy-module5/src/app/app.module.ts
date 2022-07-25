import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './service/facility/facility.component';
import { CustomerComponent } from './customer-angular/customer/customer.component';
import {EditFacilityComponent} from "./service/edit-facility/edit-facility.component";
import { FuramaComponent } from './furama/furama.component';
import { CreateCustomerComponent } from './customer-angular/create-customer/create-customer.component';
import { CreateFacilityComponent } from './service/create-facility/create-facility.component';
import { ContractComponent } from './contract-angular/contract/contract.component';
import { CreateContractComponent } from './contract-angular/create-contract/create-contract.component';
import { EditCustomerComponent } from './customer-angular/edit-customer/edit-customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilityComponent,
    CustomerComponent,
    EditFacilityComponent,
    FuramaComponent,
    CreateCustomerComponent,
    CreateFacilityComponent,
    ContractComponent,
    CreateContractComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
