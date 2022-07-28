import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProductRoutingModule} from './product-routing.module';



@NgModule({
  declarations: [ProductListComponent, ProductEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
