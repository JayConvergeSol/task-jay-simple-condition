import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadFieldService {

  constructor() { }

  fieldsData =[
    {
        "layout_artifact_id": 1036634,
        "category_id": 1000098,
        "row": 1,
        "column": 1,
        "order": 0,
        "is_read_only": 1,
        "field_display_type_id": 0,
        "rows": 1,
        "field_artifact_id": 1003667,
        "display_name": "Control Number",
        "is_required": true,
        "artifact_view_field_id": 1000186,
        "format_string": ""
    },
    {
        "layout_artifact_id": 1036634,
        "category_id": 1000098,
        "row": 4,
        "column": 1,
        "order": 0,
        "is_read_only": 0,
        "field_display_type_id": 6,
        "rows": 10,
        "field_artifact_id": 1042916,
        "display_name": "Date",
        "is_required": false,
        "artifact_view_field_id": 1002802,
        "format_string": "d"
    },
    {
        "layout_artifact_id": 1036634,
        "category_id": 1000098,
        "row": 5,
        "column": 1,
        "order": 0,
        "is_read_only": 0,
        "field_display_type_id": 3,
        "rows": 10,
        "field_artifact_id": 1042886,
        "display_name": "Number",
        "is_required": false,
        "artifact_view_field_id": 1002784,
        "format_string": ""
    },
    {
        "layout_artifact_id": 1036634,
        "category_id": 1000098,
        "row": 6,
        "column": 1,
        "order": 0,
        "is_read_only": 0,
        "field_display_type_id": 0,
        "rows": 10,
        "field_artifact_id": 1042950,
        "display_name": "Fixed Length Text",
        "is_required": false,
        "artifact_view_field_id": 1002810,
        "format_string": ""
    },
    {
        "layout_artifact_id": 1036634,
        "category_id": 1000098,
        "row": 7,
        "column": 1,
        "order": 0,
        "is_read_only": 0,
        "field_display_type_id": 19,
        "rows": 10,
        "field_artifact_id": 1042917,
        "display_name": "User",
        "is_required": false,
        "artifact_view_field_id": 1002803,
        "format_string": ""
    },
    {
        "layout_artifact_id": 1036634,
        "category_id": 1000098,
        "row": 8,
        "column": 1,
        "order": 0,
        "is_read_only": 0,
        "field_display_type_id": 3,
        "rows": 10,
        "field_artifact_id": 1042915,
        "display_name": "Whole Number",
        "is_required": false,
        "artifact_view_field_id": 1002801,
        "format_string": ""
    },
    {
        "layout_artifact_id": 1036634,
        "category_id": 1000098,
        "row": 9,
        "column": 1,
        "order": 0,
        "is_read_only": 0,
        "field_display_type_id": 25,
        "rows": 10,
        "field_artifact_id": 1042884,
        "display_name": "Wombat (Single)",
        "is_required": false,
        "artifact_view_field_id": 1002782,
        "format_string": ""
    },
    {
        "layout_artifact_id": 1036634,
        "category_id": 1000098,
        "row": 10,
        "column": 1,
        "order": 0,
        "is_read_only": 0,
        "field_display_type_id": 22,
        "rows": 10,
        "field_artifact_id": 1040271,
        "display_name": "Wombats",
        "is_required": false,
        "artifact_view_field_id": 1002778,
        "format_string": ""
    }
  ];

  getConditions(){
    return this.fieldsData
  }

}
