import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TicketListComponent} from './ticket-list/ticket-list.component';


const routes: Routes = [{
  path: '', component: HomeComponent
},
  {
    path: 'list', component: TicketListComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
