import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header/header.component";
import {FooterComponent} from "./footer/footer/footer.component";
import {FuramaComponent} from "./furama/furama/furama.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
      FooterComponent,
      FuramaComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
