import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleConditionRoutingModule } from './simple-condition-routing.module';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { DialogConditionComponent } from './shared/dialog/dialog-condition/dialog-condition.component';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
@NgModule({
  declarations: [
    ConditionsComponent,
    DialogConditionComponent
  ],
  imports: [
    CommonModule,
    SimpleConditionRoutingModule,
    DynamicDialogModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    FormsModule, 
    ReactiveFormsModule,
    InputSwitchModule,
    CalendarModule,
    InputNumberModule,
    MultiSelectModule
  ]
})
export class SimpleConditionModule { }
