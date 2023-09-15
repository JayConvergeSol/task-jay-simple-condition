import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadObjectService {

  constructor() { }

    data = [
        {
            "filter_id": 1003676,
            "filter_display": "Artifact ID",
            "field_type_id": 1,
            "field_type_string": "integer",
            "field_type_input": "number",
            "comparison_operators": [
                "Between",
                "Equals",
                "GreaterThan",
                "HasChanged",
                "IsSet",
                "LessThan",
                "Was"
            ],
            "comparison_operator_ids": [
                1,
                5,
                6,
                7,
                9,
                10,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1003667,
            "filter_display": "Control Number",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
            {
                "filter_id": 1042916,
                "filter_display": "Date",
                "field_type_id": 2,
                "field_type_string": "date",
                "field_type_input": "text",
                "comparison_operators": [
                    "Between",
                    "Equals",
                    "GreaterThan",
                    "HasChanged",
                    "IsSet",
                    "LessThan",
                    "Was"
                ],
                "comparison_operator_ids": [
                    1,
                    5,
                    6,
                    7,
                    9,
                    10,
                    13
                ],
                "value_id": 0,
                "choices": {
                    "0": null
                }
            },
        {
            "filter_id": 1043745,
            "filter_display": "Date Time",
            "field_type_id": 2,
            "field_type_string": "date",
            "field_type_input": "text",
            "comparison_operators": [
                "Between",
                "Equals",
                "GreaterThan",
                "HasChanged",
                "IsSet",
                "LessThan",
                "Was"
            ],
            "comparison_operator_ids": [
                1,
                5,
                6,
                7,
                9,
                10,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1042925,
            "filter_display": "Doc Multichoice",
            "field_type_id": 8,
            "field_type_string": "integer",
            "field_type_input": "multi_select",
            "comparison_operators": [
                "Contains",
                "ContainsSomeOfThese",
                "Equals",
                "HasChanged",
                "IsSet",
                "Was"
            ],
            "comparison_operator_ids": [
                2,
                3,
                5,
                7,
                9,
                13
            ],
            "value_id": 0,
            "choices": {
                "1042926": "MC1",
                "1042927": "MC2",
                "1042928": "MC2A",
                "1042929": "MC2B"
            }
        },
        {
            "filter_id": 1003668,
            "filter_display": "Extracted Text",
            "field_type_id": 4,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Contains",
                "Equals",
                "HasChanged",
                "IsSet",
                "Match",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                2,
                4,
                5,
                7,
                9,
                11,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1042950,
            "filter_display": "Fixed Length Text",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1003677,
            "filter_display": "Folder Name",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1003671,
            "filter_display": "Group Identifier",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1035247,
            "filter_display": "Has Inline Tags",
            "field_type_id": 3,
            "field_type_string": "boolean",
            "field_type_input": "radio",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was"
            ],
            "comparison_operator_ids": [
                5,
                7,
                9,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1003673,
            "filter_display": "Has Native",
            "field_type_id": 3,
            "field_type_string": "boolean",
            "field_type_input": "radio",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was"
            ],
            "comparison_operator_ids": [
                5,
                7,
                9,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1037221,
            "filter_display": "Image QC Status",
            "field_type_id": 8,
            "field_type_string": "integer",
            "field_type_input": "multi_select",
            "comparison_operators": [
                "Contains",
                "ContainsSomeOfThese",
                "Equals",
                "HasChanged",
                "IsSet",
                "Was"
            ],
            "comparison_operator_ids": [
                2,
                3,
                5,
                7,
                9,
                13
            ],
            "value_id": 0,
            "choices": {
                "1037222": "Hidden for QC"
            }
        },
        {
            "filter_id": 1003669,
            "filter_display": "MD5 Hash",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1042886,
            "filter_display": "Number",
            "field_type_id": 1,
            "field_type_string": "integer",
            "field_type_input": "number",
            "comparison_operators": [
                "Between",
                "Equals",
                "GreaterThan",
                "HasChanged",
                "IsSet",
                "LessThan",
                "Was"
            ],
            "comparison_operator_ids": [
                1,
                5,
                6,
                7,
                9,
                10,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1033814,
            "filter_display": "Production Errors",
            "field_type_id": 3,
            "field_type_string": "boolean",
            "field_type_input": "radio",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was"
            ],
            "comparison_operator_ids": [
                5,
                7,
                9,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1038226,
            "filter_display": "Relativity AttachmentID",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1035266,
            "filter_display": "Relativity Image Count",
            "field_type_id": 1,
            "field_type_string": "integer",
            "field_type_input": "number",
            "comparison_operators": [
                "Between",
                "Equals",
                "GreaterThan",
                "HasChanged",
                "IsSet",
                "LessThan",
                "Was"
            ],
            "comparison_operator_ids": [
                1,
                5,
                6,
                7,
                9,
                10,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1035244,
            "filter_display": "Relativity Native Time Zone Offset",
            "field_type_id": 6,
            "field_type_string": "double",
            "field_type_input": "number",
            "comparison_operators": [
                "Between",
                "Equals",
                "GreaterThan",
                "HasChanged",
                "IsSet",
                "LessThan",
                "Was"
            ],
            "comparison_operator_ids": [
                1,
                5,
                6,
                7,
                9,
                10,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1034248,
            "filter_display": "Relativity Native Type",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1039908,
            "filter_display": "Relativity Slice Origin ID",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1038227,
            "filter_display": "Relativity SliceID",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1034247,
            "filter_display": "Supported By Viewer",
            "field_type_id": 3,
            "field_type_string": "boolean",
            "field_type_input": "radio",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was"
            ],
            "comparison_operator_ids": [
                5,
                7,
                9,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1003679,
            "filter_display": "System Created By",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1003678,
            "filter_display": "System Created On",
            "field_type_id": 2,
            "field_type_string": "date",
            "field_type_input": "text",
            "comparison_operators": [
                "Between",
                "Equals",
                "GreaterThan",
                "HasChanged",
                "IsSet",
                "LessThan",
                "Was"
            ],
            "comparison_operator_ids": [
                1,
                5,
                6,
                7,
                9,
                10,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1003681,
            "filter_display": "System Last Modified By",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1003680,
            "filter_display": "System Last Modified On",
            "field_type_id": 2,
            "field_type_string": "date",
            "field_type_input": "text",
            "comparison_operators": [
                "Between",
                "Equals",
                "GreaterThan",
                "HasChanged",
                "IsSet",
                "LessThan",
                "Was"
            ],
            "comparison_operator_ids": [
                1,
                5,
                6,
                7,
                9,
                10,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1036939,
            "filter_display": "Time Zone Field",
            "field_type_id": 10,
            "field_type_string": "integer",
            "field_type_input": "single_select",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsOneofTheseValues",
                "IsSet",
                "Was"
            ],
            "comparison_operator_ids": [
                5,
                7,
                8,
                9,
                13
            ],
            "value_id": 0,
            "choices": {
                "1036969": "(UTC - 03:00) Salvador",
                "1036970": "(UTC + 03:00) Kaliningrad, Minsk",
                "1036820": "(UTC) Casablanca",
                "1036821": "(UTC) Coordinated Universal Time",
                "1036822": "(UTC) Dublin, Edinburgh, Lisbon, London",
                "1036823": "(UTC) Monrovia, Reykjavik",
                "1036824": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
                "1036825": "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
                "1036826": "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
                "1036827": "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
                "1036828": "(UTC+01:00) West Central Africa",
                "1036829": "(UTC+01:00) Windhoek",
                "1036830": "(UTC+02:00) Amman",
                "1036831": "(UTC+02:00) Athens, Bucharest",
                "1036832": "(UTC+02:00) Beirut",
                "1036833": "(UTC+02:00) Cairo",
                "1036834": "(UTC+02:00) Damascus",
                "1036835": "(UTC+02:00) Harare, Pretoria",
                "1036836": "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
                "1036968": "(UTC+02:00) Istanbul",
                "1036837": "(UTC+02:00) Jerusalem",
                "1036838": "(UTC+02:00) Nicosia",
                "1036839": "(UTC+03:00) Baghdad",
                "1036840": "(UTC+03:00) Kuwait, Riyadh",
                "1036841": "(UTC+03:00) Moscow, St. Petersburg, Volgograd",
                "1036842": "(UTC+03:00) Nairobi",
                "1036843": "(UTC+03:30) Tehran",
                "1036844": "(UTC+04:00) Abu Dhabi, Muscat",
                "1036845": "(UTC+04:00) Baku",
                "1036846": "(UTC+04:00) Port Louis",
                "1036847": "(UTC+04:00) Tbilisi",
                "1036848": "(UTC+04:00) Yerevan",
                "1036849": "(UTC+04:30) Kabul",
                "1036851": "(UTC+05:00) Islamabad, Karachi",
                "1036852": "(UTC+05:00) Tashkent",
                "1036853": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
                "1036854": "(UTC+05:30) Sri Jayawardenepura",
                "1036855": "(UTC+05:45) Kathmandu",
                "1036856": "(UTC+06:00) Astana",
                "1036857": "(UTC+06:00) Dhaka",
                "1036850": "(UTC+06:00) Ekaterinburg",
                "1036859": "(UTC+06:30) Yangon (Rangoon)",
                "1036860": "(UTC+07:00) Bangkok, Hanoi, Jakarta",
                "1036858": "(UTC+07:00) Novosibirsk",
                "1036862": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
                "1036861": "(UTC+08:00) Krasnoyarsk",
                "1036864": "(UTC+08:00) Kuala Lumpur, Singapore",
                "1036865": "(UTC+08:00) Perth",
                "1036866": "(UTC+08:00) Taipei",
                "1036867": "(UTC+08:00) Ulaanbaatar",
                "1036863": "(UTC+09:00) Irkutsk",
                "1036868": "(UTC+09:00) Osaka, Sapporo, Tokyo",
                "1036869": "(UTC+09:00) Seoul",
                "1036871": "(UTC+09:30) Adelaide",
                "1036872": "(UTC+09:30) Darwin",
                "1036873": "(UTC+10:00) Brisbane",
                "1036874": "(UTC+10:00) Canberra, Melbourne, Sydney",
                "1036875": "(UTC+10:00) Guam, Port Moresby",
                "1036876": "(UTC+10:00) Hobart",
                "1036870": "(UTC+10:00) Yakutsk",
                "1036879": "(UTC+11:00) Solomon Is., New Caledonia",
                "1036877": "(UTC+11:00) Vladivostok",
                "1036880": "(UTC+12:00) Auckland, Wellington",
                "1036881": "(UTC+12:00) Coordinated Universal Time+12",
                "1036882": "(UTC+12:00) Fiji",
                "1036878": "(UTC+12:00) Magadan",
                "1036883": "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
                "1036884": "(UTC+13:00) Nuku'alofa",
                "1036916": "(UTC+13:00) Samoa",
                "1036885": "(UTC-01:00) Azores",
                "1036886": "(UTC-01:00) Cape Verde Is.",
                "1036887": "(UTC-02:00) Coordinated Universal Time-02",
                "1036888": "(UTC-02:00) Mid-Atlantic",
                "1036889": "(UTC-03:00) Brasilia",
                "1036890": "(UTC-03:00) Buenos Aires",
                "1036891": "(UTC-03:00) Cayenne, Fortaleza",
                "1036892": "(UTC-03:00) Greenland",
                "1036893": "(UTC-03:00) Montevideo",
                "1036894": "(UTC-03:30) Newfoundland",
                "1036895": "(UTC-04:00) Asuncion",
                "1036896": "(UTC-04:00) Atlantic Time (Canada)",
                "1036897": "(UTC-04:00) Cuiaba",
                "1036898": "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
                "1036899": "(UTC-04:00) Santiago",
                "1036900": "(UTC-04:30) Caracas",
                "1036901": "(UTC-05:00) Bogota, Lima, Quito",
                "1036902": "(UTC-05:00) Eastern Time (US & Canada)",
                "1036903": "(UTC-05:00) Indiana (East)",
                "1036904": "(UTC-06:00) Central America",
                "1036905": "(UTC-06:00) Central Time (US & Canada)",
                "1036906": "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
                "1036907": "(UTC-06:00) Saskatchewan",
                "1036908": "(UTC-07:00) Arizona",
                "1036909": "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
                "1036910": "(UTC-07:00) Mountain Time (US & Canada)",
                "1036911": "(UTC-08:00) Baja California",
                "1036912": "(UTC-08:00) Pacific Time (US & Canada)",
                "1036913": "(UTC-09:00) Alaska",
                "1036914": "(UTC-10:00) Hawaii",
                "1036915": "(UTC-11:00) Coordinated Universal Time-11",
                "1036917": "(UTC-12:00) International Date Line West"
            }
        },
        {
            "filter_id": 1042917,
            "filter_display": "User",
            "field_type_id": 11,
            "field_type_string": "integer",
            "field_type_input": "multi_select",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1042915,
            "filter_display": "Whole Number",
            "field_type_id": 1,
            "field_type_string": "integer",
            "field_type_input": "number",
            "comparison_operators": [
                "Between",
                "Equals",
                "GreaterThan",
                "HasChanged",
                "IsSet",
                "LessThan",
                "Was"
            ],
            "comparison_operator_ids": [
                1,
                5,
                6,
                7,
                9,
                10,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1042884,
            "filter_display": "Wombat (Single)",
            "field_type_id": 10,
            "field_type_string": "integer",
            "field_type_input": "single_select",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsOneofTheseValues",
                "IsSet",
                "Was"
            ],
            "comparison_operator_ids": [
                5,
                7,
                8,
                9,
                13
            ],
            "value_id": 0,
            "choices": {
                "1043163": "Charlie",
                "1040266": "Chewbacca",
                "1040267": "Koa",
                "1040268": "Lola",
                "1040270": "Uonbatto",
                "1040269": "Willie"
            }
        },
        {
            "filter_id": 1042948,
            "filter_display": "Wombat (Single)::Wombat Nickname",
            "field_type_id": 0,
            "field_type_string": "string",
            "field_type_input": "text",
            "comparison_operators": [
                "Equals",
                "HasChanged",
                "IsSet",
                "Was",
                "StartsWith",
                "EndsWith"
            ],
            "comparison_operator_ids": [
                4,
                5,
                7,
                9,
                12,
                13
            ],
            "value_id": 0,
            "choices": {
                "0": null
            }
        },
        {
            "filter_id": 1040271,
            "filter_display": "Wombats",
            "field_type_id": 13,
            "field_type_string": "integer",
            "field_type_input": "multi_select",
            "comparison_operators": [
                "Contains",
                "ContainsSomeOfThese",
                "Equals",
                "HasChanged",
                "IsSet",
                "Was"
            ],
            "comparison_operator_ids": [
                2,
                3,
                5,
                7,
                9,
                13
            ],
            "value_id": 0,
            "choices": {
                "1043163": "Charlie",
                "1040266": "Chewbacca",
                "1040267": "Koa",
                "1040268": "Lola",
                "1040270": "Uonbatto",
                "1040269": "Willie"
            }
        }
    ]

    getFields(){
        return this.data;
    }

    getOperatorData(field_artifact_id:string){
        console.log(field_artifact_id);
        
        let selectedData = this.data.filter((condition:any) => condition.filter_id == field_artifact_id);
        return selectedData;
    }
}
