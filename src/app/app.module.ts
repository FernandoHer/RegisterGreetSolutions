import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfComponent } from './pdf/pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
