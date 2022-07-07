import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { MaterialUi } from '../material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsService } from './results.service';




@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ContactComponent,
    AddressComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialUi,
    MatNativeDateModule,
    HttpClientModule,
  ],
  providers: [ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
