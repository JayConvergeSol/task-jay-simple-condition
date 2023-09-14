import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleConditionModule } from './simple-condition/simple-condition.module';
import { DynamicDialogModule,DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleConditionModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
