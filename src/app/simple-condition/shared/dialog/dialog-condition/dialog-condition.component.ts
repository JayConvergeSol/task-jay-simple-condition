import { Component } from '@angular/core';

import { ReadObjectService } from '../../service/read-object.service';
import { comparison_operatorsService } from '../../service/comparison-operator.service';

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
  valueType2 = 'Constant';
  valueType = 'Field';

  constructor(
    private readfieldService : comparison_operatorsService,
    private readObjService: ReadObjectService  
  ){}

  ngOnInit(): void {
    this.conditions = this.readObjService.getFields();
    console.log(this.conditions);
  }

  getOperator(filter_id:string){
    this.operator = this.conditions.find(field => field.filter_id === filter_id);
    
    for (let i = 0; i < this.operator.comparison_operator_ids.length; i++) {
      let value  = this.readfieldService.getConditions(this.operator.comparison_operator_ids[i]);
      console.log(this.operator.comparison_operator_ids[i])
      this.formateOperator.push({column: this.operator.comparison_operator_ids[i] ,data: value})
    }
    
    for (const key in this.operator.choices) {
      if (this.operator.choices.hasOwnProperty(key)) {
        this.constantChoices.push({ id: key, name: this.operator.choices[key] });
      }
    }
    console.log(this.formateOperator)
  }

  // saveData(data:any){
  //   console.log(data)
  // }
}
