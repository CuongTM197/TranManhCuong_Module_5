import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility/facility.component';
import { CustomerComponent } from './customer/customer.component';
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";
import { FuramaComponent } from './furama/furama.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateFacilityComponent } from './create-facility/create-facility.component';
import { ContractComponent } from './contract/contract.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';



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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
