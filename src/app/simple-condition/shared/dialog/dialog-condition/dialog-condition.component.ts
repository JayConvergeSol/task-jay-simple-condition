import { Component } from '@angular/core';
import { ReadFieldService } from '../../service/read-field.service';
import { ReadObjectService } from '../../service/read-object.service';

@Component({
  selector: 'app-dialog-condition',
  templateUrl: './dialog-condition.component.html',
  styleUrls: ['./dialog-condition.component.css']
})
export class DialogConditionComponent {
  conditions : any[] = []
  operator :any =[]
  formateOperator : any = []
  constantChoices :any[]=[]

  constructor(
    private readfieldService : ReadFieldService,
    private readObjService: ReadObjectService  
  ){}

  ngOnInit(): void {
    this.conditions = this.readfieldService.getConditions();
    console.log(this.conditions);
  }

  getOperator(field_artifact_id:string){
    this.operator = this.readObjService.getOperatorData(field_artifact_id)[0];
    for (let i = 0; i < this.operator.comparison_operator_ids.length; i++) {
      this.formateOperator.push({column: this.operator.comparison_operator_ids[i] ,data: this.operator.comparison_operators[i]})
    }

    for (const key in this.operator.choices) {
      if (this.operator.choices.hasOwnProperty(key)) {
        this.constantChoices.push({ id: key, name: this.operator.choices[key] });
      }
    }
  }

  saveData(data:any){
    console.log(data)
  }
}
