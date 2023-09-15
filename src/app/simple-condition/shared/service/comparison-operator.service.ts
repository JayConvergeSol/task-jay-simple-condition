import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class comparison_operatorsService {

  constructor() { }

  comparison_operators =[
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 1,
        "name": "Between",
        "description": "Between"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 2,
        "name": "Contains",
        "description": "Contains"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 3,
        "name": "ContainsSomeOfThese",
        "description": "Contains Some Of These"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 4,
        "name": "EndsWith",
        "description": "Ends With"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 5,
        "name": "Equals",
        "description": "Equals"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 6,
        "name": "GreaterThan",
        "description": "Greater Than"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 7,
        "name": "HasChanged",
        "description": "Has Changed"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 8,
        "name": "IsOneofTheseValues",
        "description": "Is One of These Values"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 9,
        "name": "IsSet",
        "description": "Is Set"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 10,
        "name": "LessThan",
        "description": "Less Than"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 11,
        "name": "Match",
        "description": "Match"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 12,
        "name": "StartsWith",
        "description": "Starts With"
    },
    {
        "value_guid": "00000000-0000-0000-0000-000000000000",
        "value_int": 13,
        "name": "Was",
        "description": "Was"
    }
];

  getConditions(id:number){
    let filteredData = this.comparison_operators.filter(element => element.value_int == id)[0];
    return filteredData.description
  }

}
