import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import '@angular/common/locales/global/es';
import '@angular/common/locales/global/fr';


import { AppComponent } from './app.component';
import { CapitalizadoskrPipe } from './pipes/capitalizadoskr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoskrPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
