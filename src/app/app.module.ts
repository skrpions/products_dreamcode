import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,   // Es necesario que HttpClientModule siempre esté
    NgxMaskModule.forRoot({ dropSpecialCharacters: true }) // al guardar, mantendrá la máscara
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
