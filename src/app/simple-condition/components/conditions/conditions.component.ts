import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogConditionComponent } from '../../shared/dialog/dialog-condition/dialog-condition.component';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {
  ref: DynamicDialogRef | undefined;
  constructor(public dialogService: DialogService
  
    ) {}
  show() {
    this.ref = this.dialogService.open(DialogConditionComponent, {
        header: 'Select a Condition',
        width: '70%',
        height: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true
    });
  }
}
