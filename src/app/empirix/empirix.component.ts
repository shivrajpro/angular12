import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empirix',
  templateUrl: './empirix.component.html',
  styleUrls: ['./empirix.component.scss']
})
export class EmpirixComponent implements OnInit {

  customFilterGroups: any[] = [];
  customFilterItem: any = {};
  selectedCustomProps: any = {};
  mdmDataList: any[] = [];

  // for number of properties
  numOfProps: number[] = [];

  // for dimensions
  dimensionGroupsTracker: any = {};
  itemList: any[] = [];
  settings: any = {};
  selectedItems: any[] = [];

  // for dimension property values
  propValuesTracker:any = {};
  propertiesList: any[] = [];
  propertiesSettings: any = {};
  selectedPropertVals: any[] = [];

  constructor() { }

  ngOnInit(): void {
    //
    this.numOfProps = Array(0).fill(0).map((e, i)=>{
      return i;
    });
    console.log('>> this.numOfProps',this.numOfProps);
    
    // for dimensions
    this.customFilterGroups = [
      {
        "Cause": [
          {
            "item": "protocol_error_id.error_flag",
            "groupName": "Cause",
            "value": {
              "id": null,
              "propertyName": "error_flag",
              "propertyDisplayName": "error_flag",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "protocol_error_id.error_group",
            "groupName": "Cause",
            "value": {
              "id": null,
              "propertyName": "error_group",
              "propertyDisplayName": "error_group",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "protocol_error_id.error_reason",
            "groupName": "Cause",
            "value": {
              "id": null,
              "propertyName": "error_reason",
              "propertyDisplayName": "error_reason",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "protocol_error_id.failure_code",
            "groupName": "Cause",
            "value": {
              "id": null,
              "propertyName": "failure_code",
              "propertyDisplayName": "failure_code",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "protocol_error_id.protocol_name",
            "groupName": "Cause",
            "value": {
              "id": null,
              "propertyName": "protocol_name",
              "propertyDisplayName": "protocol_name",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "protocol_error_id.reason_group",
            "groupName": "Cause",
            "value": {
              "id": null,
              "propertyName": "reason_group",
              "propertyDisplayName": "reason_group",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          }
        ],
        "Interface": [
          {
            "item": "interface_id.description",
            "groupName": "Interface",
            "value": {
              "id": null,
              "propertyName": "description",
              "propertyDisplayName": "description",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "interface_id.interface",
            "groupName": "Interface",
            "value": {
              "id": null,
              "propertyName": "interface",
              "propertyDisplayName": "interface",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "interface_id.network_type",
            "groupName": "Interface",
            "value": {
              "id": null,
              "propertyName": "network_type",
              "propertyDisplayName": "network_type",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          }
        ],
        "Peer Network Element": [
          {
            "item": "network_element_a_id.address",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "address",
              "propertyDisplayName": "address",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.city",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "city",
              "propertyDisplayName": "city",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.country",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "country",
              "propertyDisplayName": "country",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.group1",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "group1",
              "propertyDisplayName": "group1",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.group10",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "group10",
              "propertyDisplayName": "group10",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.group2",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "group2",
              "propertyDisplayName": "group2",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.group3",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "group3",
              "propertyDisplayName": "group3",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.group4",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "group4",
              "propertyDisplayName": "group4",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.group5",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "group5",
              "propertyDisplayName": "group5",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.group6",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "group6",
              "propertyDisplayName": "group6",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.group7",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "group7",
              "propertyDisplayName": "group7",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.group8",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "group8",
              "propertyDisplayName": "group8",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.group9",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "group9",
              "propertyDisplayName": "group9",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.latitude",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "latitude",
              "propertyDisplayName": "latitude",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.longitude",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "longitude",
              "propertyDisplayName": "longitude",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.manufacturer_info",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "manufacturer_info",
              "propertyDisplayName": "manufacturer_info",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.network_element_type",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "network_element_type",
              "propertyDisplayName": "network_element_type",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.region",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "region",
              "propertyDisplayName": "region",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_a_id.region_id",
            "groupName": "Peer Network Element",
            "value": {
              "id": null,
              "propertyName": "region_id",
              "propertyDisplayName": "region_id",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          }
        ],
        "Procedure": [
          {
            "item": "procedure_id.event_code",
            "groupName": "Procedure",
            "value": {
              "id": null,
              "propertyName": "event_code",
              "propertyDisplayName": "event_code",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "procedure_id.event_drilldown_name",
            "groupName": "Procedure",
            "value": {
              "id": null,
              "propertyName": "event_drilldown_name",
              "propertyDisplayName": "event_drilldown_name",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "procedure_id.event_type",
            "groupName": "Procedure",
            "value": {
              "id": null,
              "propertyName": "event_type",
              "propertyDisplayName": "event_type",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "procedure_id.long_description",
            "groupName": "Procedure",
            "value": {
              "id": null,
              "propertyName": "long_description",
              "propertyDisplayName": "long_description",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "procedure_id.protocol_name",
            "groupName": "Procedure",
            "value": {
              "id": null,
              "propertyName": "protocol_name",
              "propertyDisplayName": "protocol_name",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "procedure_id.qos_aspects",
            "groupName": "Procedure",
            "value": {
              "id": null,
              "propertyName": "qos_aspects",
              "propertyDisplayName": "qos_aspects",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          }
        ],
        "Protocol": [
          {
            "item": "protocol_id.description",
            "groupName": "Protocol",
            "value": {
              "id": null,
              "propertyName": "description",
              "propertyDisplayName": "description",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "protocol_id.protocol",
            "groupName": "Protocol",
            "value": {
              "id": null,
              "propertyName": "protocol",
              "propertyDisplayName": "protocol",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          }
        ],
        "Rat": [
          {
            "item": "rat_id.code",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "code",
              "propertyDisplayName": "code",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.description",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "description",
              "propertyDisplayName": "description",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.group1",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "group1",
              "propertyDisplayName": "group1",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.group10",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "group10",
              "propertyDisplayName": "group10",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.group2",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "group2",
              "propertyDisplayName": "group2",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.group3",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "group3",
              "propertyDisplayName": "group3",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.group4",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "group4",
              "propertyDisplayName": "group4",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.group5",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "group5",
              "propertyDisplayName": "group5",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.group6",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "group6",
              "propertyDisplayName": "group6",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.group7",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "group7",
              "propertyDisplayName": "group7",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.group8",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "group8",
              "propertyDisplayName": "group8",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.group9",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "group9",
              "propertyDisplayName": "group9",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.property",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "property",
              "propertyDisplayName": "property",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "rat_id.rat_group",
            "groupName": "Rat",
            "value": {
              "id": null,
              "propertyName": "rat_group",
              "propertyDisplayName": "rat_group",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          }
        ],
        "Roaming Procedure Code": [
          {
            "item": "roaming_procedure.description",
            "groupName": "Roaming Procedure Code",
            "value": {
              "id": null,
              "propertyName": "description",
              "propertyDisplayName": "description",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "roaming_procedure.event_code",
            "groupName": "Roaming Procedure Code",
            "value": {
              "id": null,
              "propertyName": "event_code",
              "propertyDisplayName": "event_code",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "roaming_procedure.event_drilldown_name",
            "groupName": "Roaming Procedure Code",
            "value": {
              "id": null,
              "propertyName": "event_drilldown_name",
              "propertyDisplayName": "event_drilldown_name",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "roaming_procedure.event_type",
            "groupName": "Roaming Procedure Code",
            "value": {
              "id": null,
              "propertyName": "event_type",
              "propertyDisplayName": "event_type",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "roaming_procedure.long_description",
            "groupName": "Roaming Procedure Code",
            "value": {
              "id": null,
              "propertyName": "long_description",
              "propertyDisplayName": "long_description",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "roaming_procedure.protocol_name",
            "groupName": "Roaming Procedure Code",
            "value": {
              "id": null,
              "propertyName": "protocol_name",
              "propertyDisplayName": "protocol_name",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "roaming_procedure.qos_aspects",
            "groupName": "Roaming Procedure Code",
            "value": {
              "id": null,
              "propertyName": "qos_aspects",
              "propertyDisplayName": "qos_aspects",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          }
        ],
        "Target Network Element": [
          {
            "item": "network_element_b_id.address",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "address",
              "propertyDisplayName": "address",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.city",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "city",
              "propertyDisplayName": "city",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.country",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "country",
              "propertyDisplayName": "country",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.group1",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "group1",
              "propertyDisplayName": "group1",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.group10",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "group10",
              "propertyDisplayName": "group10",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.group2",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "group2",
              "propertyDisplayName": "group2",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.group3",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "group3",
              "propertyDisplayName": "group3",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.group4",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "group4",
              "propertyDisplayName": "group4",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.group5",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "group5",
              "propertyDisplayName": "group5",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.group6",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "group6",
              "propertyDisplayName": "group6",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.group7",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "group7",
              "propertyDisplayName": "group7",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.group8",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "group8",
              "propertyDisplayName": "group8",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.group9",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "group9",
              "propertyDisplayName": "group9",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.latitude",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "latitude",
              "propertyDisplayName": "latitude",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.longitude",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "longitude",
              "propertyDisplayName": "longitude",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.manufacturer_info",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "manufacturer_info",
              "propertyDisplayName": "manufacturer_info",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.network_element_type",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "network_element_type",
              "propertyDisplayName": "network_element_type",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.region",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "region",
              "propertyDisplayName": "region",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          },
          {
            "item": "network_element_b_id.region_id",
            "groupName": "Target Network Element",
            "value": {
              "id": null,
              "propertyName": "region_id",
              "propertyDisplayName": "region_id",
              "validTo": null,
              "validFrom": null,
              "propertyValues": null,
              "enableThreshold": false,
              "userDisplayName": null
            }
          }
        ],
        "totalCount": 76
      }
    ];

    this.customFilterItem = {
      "Cause": [
        {
          "item": "protocol_error_id.error_flag",
          "groupName": "Cause",
          "value": {
            "id": null,
            "propertyName": "error_flag",
            "propertyDisplayName": "error_flag",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "protocol_error_id.error_group",
          "groupName": "Cause",
          "value": {
            "id": null,
            "propertyName": "error_group",
            "propertyDisplayName": "error_group",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "protocol_error_id.error_reason",
          "groupName": "Cause",
          "value": {
            "id": null,
            "propertyName": "error_reason",
            "propertyDisplayName": "error_reason",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "protocol_error_id.failure_code",
          "groupName": "Cause",
          "value": {
            "id": null,
            "propertyName": "failure_code",
            "propertyDisplayName": "failure_code",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "protocol_error_id.protocol_name",
          "groupName": "Cause",
          "value": {
            "id": null,
            "propertyName": "protocol_name",
            "propertyDisplayName": "protocol_name",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "protocol_error_id.reason_group",
          "groupName": "Cause",
          "value": {
            "id": null,
            "propertyName": "reason_group",
            "propertyDisplayName": "reason_group",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        }
      ],
      "Interface": [
        {
          "item": "interface_id.description",
          "groupName": "Interface",
          "value": {
            "id": null,
            "propertyName": "description",
            "propertyDisplayName": "description",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "interface_id.interface",
          "groupName": "Interface",
          "value": {
            "id": null,
            "propertyName": "interface",
            "propertyDisplayName": "interface",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "interface_id.network_type",
          "groupName": "Interface",
          "value": {
            "id": null,
            "propertyName": "network_type",
            "propertyDisplayName": "network_type",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        }
      ],
      "Peer Network Element": [
        {
          "item": "network_element_a_id.address",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "address",
            "propertyDisplayName": "address",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.city",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "city",
            "propertyDisplayName": "city",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.country",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "country",
            "propertyDisplayName": "country",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.group1",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "group1",
            "propertyDisplayName": "group1",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.group10",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "group10",
            "propertyDisplayName": "group10",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.group2",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "group2",
            "propertyDisplayName": "group2",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.group3",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "group3",
            "propertyDisplayName": "group3",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.group4",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "group4",
            "propertyDisplayName": "group4",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.group5",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "group5",
            "propertyDisplayName": "group5",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.group6",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "group6",
            "propertyDisplayName": "group6",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.group7",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "group7",
            "propertyDisplayName": "group7",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.group8",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "group8",
            "propertyDisplayName": "group8",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.group9",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "group9",
            "propertyDisplayName": "group9",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.latitude",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "latitude",
            "propertyDisplayName": "latitude",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.longitude",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "longitude",
            "propertyDisplayName": "longitude",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.manufacturer_info",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "manufacturer_info",
            "propertyDisplayName": "manufacturer_info",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.network_element_type",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "network_element_type",
            "propertyDisplayName": "network_element_type",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.region",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "region",
            "propertyDisplayName": "region",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_a_id.region_id",
          "groupName": "Peer Network Element",
          "value": {
            "id": null,
            "propertyName": "region_id",
            "propertyDisplayName": "region_id",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        }
      ],
      "Procedure": [
        {
          "item": "procedure_id.event_code",
          "groupName": "Procedure",
          "value": {
            "id": null,
            "propertyName": "event_code",
            "propertyDisplayName": "event_code",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "procedure_id.event_drilldown_name",
          "groupName": "Procedure",
          "value": {
            "id": null,
            "propertyName": "event_drilldown_name",
            "propertyDisplayName": "event_drilldown_name",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "procedure_id.event_type",
          "groupName": "Procedure",
          "value": {
            "id": null,
            "propertyName": "event_type",
            "propertyDisplayName": "event_type",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "procedure_id.long_description",
          "groupName": "Procedure",
          "value": {
            "id": null,
            "propertyName": "long_description",
            "propertyDisplayName": "long_description",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "procedure_id.protocol_name",
          "groupName": "Procedure",
          "value": {
            "id": null,
            "propertyName": "protocol_name",
            "propertyDisplayName": "protocol_name",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "procedure_id.qos_aspects",
          "groupName": "Procedure",
          "value": {
            "id": null,
            "propertyName": "qos_aspects",
            "propertyDisplayName": "qos_aspects",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        }
      ],
      "Protocol": [
        {
          "item": "protocol_id.description",
          "groupName": "Protocol",
          "value": {
            "id": null,
            "propertyName": "description",
            "propertyDisplayName": "description",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "protocol_id.protocol",
          "groupName": "Protocol",
          "value": {
            "id": null,
            "propertyName": "protocol",
            "propertyDisplayName": "protocol",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        }
      ],
      "Rat": [
        {
          "item": "rat_id.code",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "code",
            "propertyDisplayName": "code",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.description",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "description",
            "propertyDisplayName": "description",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.group1",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "group1",
            "propertyDisplayName": "group1",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.group10",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "group10",
            "propertyDisplayName": "group10",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.group2",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "group2",
            "propertyDisplayName": "group2",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.group3",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "group3",
            "propertyDisplayName": "group3",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.group4",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "group4",
            "propertyDisplayName": "group4",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.group5",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "group5",
            "propertyDisplayName": "group5",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.group6",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "group6",
            "propertyDisplayName": "group6",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.group7",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "group7",
            "propertyDisplayName": "group7",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.group8",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "group8",
            "propertyDisplayName": "group8",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.group9",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "group9",
            "propertyDisplayName": "group9",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.property",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "property",
            "propertyDisplayName": "property",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "rat_id.rat_group",
          "groupName": "Rat",
          "value": {
            "id": null,
            "propertyName": "rat_group",
            "propertyDisplayName": "rat_group",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        }
      ],
      "Roaming Procedure Code": [
        {
          "item": "roaming_procedure.description",
          "groupName": "Roaming Procedure Code",
          "value": {
            "id": null,
            "propertyName": "description",
            "propertyDisplayName": "description",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "roaming_procedure.event_code",
          "groupName": "Roaming Procedure Code",
          "value": {
            "id": null,
            "propertyName": "event_code",
            "propertyDisplayName": "event_code",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "roaming_procedure.event_drilldown_name",
          "groupName": "Roaming Procedure Code",
          "value": {
            "id": null,
            "propertyName": "event_drilldown_name",
            "propertyDisplayName": "event_drilldown_name",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "roaming_procedure.event_type",
          "groupName": "Roaming Procedure Code",
          "value": {
            "id": null,
            "propertyName": "event_type",
            "propertyDisplayName": "event_type",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "roaming_procedure.long_description",
          "groupName": "Roaming Procedure Code",
          "value": {
            "id": null,
            "propertyName": "long_description",
            "propertyDisplayName": "long_description",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "roaming_procedure.protocol_name",
          "groupName": "Roaming Procedure Code",
          "value": {
            "id": null,
            "propertyName": "protocol_name",
            "propertyDisplayName": "protocol_name",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "roaming_procedure.qos_aspects",
          "groupName": "Roaming Procedure Code",
          "value": {
            "id": null,
            "propertyName": "qos_aspects",
            "propertyDisplayName": "qos_aspects",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        }
      ],
      "Target Network Element": [
        {
          "item": "network_element_b_id.address",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "address",
            "propertyDisplayName": "address",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.city",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "city",
            "propertyDisplayName": "city",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.country",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "country",
            "propertyDisplayName": "country",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.group1",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "group1",
            "propertyDisplayName": "group1",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.group10",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "group10",
            "propertyDisplayName": "group10",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.group2",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "group2",
            "propertyDisplayName": "group2",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.group3",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "group3",
            "propertyDisplayName": "group3",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.group4",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "group4",
            "propertyDisplayName": "group4",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.group5",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "group5",
            "propertyDisplayName": "group5",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.group6",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "group6",
            "propertyDisplayName": "group6",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.group7",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "group7",
            "propertyDisplayName": "group7",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.group8",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "group8",
            "propertyDisplayName": "group8",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.group9",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "group9",
            "propertyDisplayName": "group9",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.latitude",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "latitude",
            "propertyDisplayName": "latitude",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.longitude",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "longitude",
            "propertyDisplayName": "longitude",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.manufacturer_info",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "manufacturer_info",
            "propertyDisplayName": "manufacturer_info",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.network_element_type",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "network_element_type",
            "propertyDisplayName": "network_element_type",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.region",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "region",
            "propertyDisplayName": "region",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        },
        {
          "item": "network_element_b_id.region_id",
          "groupName": "Target Network Element",
          "value": {
            "id": null,
            "propertyName": "region_id",
            "propertyDisplayName": "region_id",
            "validTo": null,
            "validFrom": null,
            "propertyValues": null,
            "enableThreshold": false,
            "userDisplayName": null
          }
        }
      ],
      "totalCount": 76
    };

    this.selectedCustomProps = {
      "0": {
        "filter": "interface_id.description",
        "text": [
          {
            "id": "Gb"
          },
          {
            "id": "E4"
          }
        ]
      }
    };

    this.mdmDataList = [
      [
        {
          "id": "A10",
          "label": "A10"
        },
        {
          "id": "AS",
          "label": "AS"
        },
        {
          "id": "C",
          "label": "C"
        },
        {
          "id": "CommonMessages",
          "label": "CommonMessages"
        },
        {
          "id": "Cr",
          "label": "Cr"
        },
        {
          "id": "CreditControl",
          "label": "CreditControl"
        },
        {
          "id": "Cx/Dx",
          "label": "Cx/Dx"
        },
        {
          "id": "D",
          "label": "D"
        },
        {
          "id": "Dh",
          "label": "Dh"
        },
        {
          "id": "E",
          "label": "E"
        },
        {
          "id": "E4",
          "label": "E4"
        },
        {
          "id": "F",
          "label": "F"
        },
        {
          "id": "Gb",
          "label": "Gb"
        },
        {
          "id": "Gi",
          "label": "Gi"
        },
        {
          "id": "Gm",
          "label": "Gm"
        },
        {
          "id": "Gmb",
          "label": "Gmb"
        },
        {
          "id": "Gn",
          "label": "Gn"
        },
        {
          "id": "GnGp",
          "label": "GnGp"
        },
        {
          "id": "Go",
          "label": "Go"
        },
        {
          "id": "Gq",
          "label": "Gq"
        },
        {
          "id": "Gr",
          "label": "Gr"
        },
        {
          "id": "GSM-A",
          "label": "GSM-A"
        },
        {
          "id": "GSM-A CC",
          "label": "GSM-A CC"
        },
        {
          "id": "Gx",
          "label": "Gx"
        },
        {
          "id": "Gx/Gy",
          "label": "Gx/Gy"
        },
        {
          "id": "Gy",
          "label": "Gy"
        },
        {
          "id": "I1",
          "label": "I1"
        },
        {
          "id": "I2",
          "label": "I2"
        },
        {
          "id": "I3",
          "label": "I3"
        },
        {
          "id": "Ici",
          "label": "Ici"
        },
        {
          "id": "IN/SCP",
          "label": "IN/SCP"
        },
        {
          "id": "INAP",
          "label": "INAP"
        },
        {
          "id": "ISC",
          "label": "ISC"
        },
        {
          "id": "ISUP",
          "label": "ISUP"
        },
        {
          "id": "IuCS",
          "label": "IuCS"
        },
        {
          "id": "IuCS CC",
          "label": "IuCS CC"
        },
        {
          "id": "IUP",
          "label": "IUP"
        },
        {
          "id": "IuPS",
          "label": "IuPS"
        },
        {
          "id": "Izi",
          "label": "Izi"
        },
        {
          "id": "Lu",
          "label": "Lu"
        },
        {
          "id": "Lub",
          "label": "Lub"
        },
        {
          "id": "M10",
          "label": "M10"
        },
        {
          "id": "Ma",
          "label": "Ma"
        },
        {
          "id": "MAP-SMS",
          "label": "MAP-SMS"
        },
        {
          "id": "MEGACO",
          "label": "MEGACO"
        },
        {
          "id": "Mg",
          "label": "Mg"
        },
        {
          "id": "Mi",
          "label": "Mi"
        },
        {
          "id": "Mj",
          "label": "Mj"
        },
        {
          "id": "Mk",
          "label": "Mk"
        },
        {
          "id": "Ml",
          "label": "Ml"
        },
        {
          "id": "Mm",
          "label": "Mm"
        },
        {
          "id": "Mn",
          "label": "Mn"
        },
        {
          "id": "Mp",
          "label": "Mp"
        },
        {
          "id": "Mr",
          "label": "Mr"
        },
        {
          "id": "Mw",
          "label": "Mw"
        },
        {
          "id": "Mx",
          "label": "Mx"
        },
        {
          "id": "Nc",
          "label": "Nc"
        },
        {
          "id": "not present",
          "label": "not present"
        },
        {
          "id": "P1",
          "label": "P1"
        },
        {
          "id": "P2",
          "label": "P2"
        },
        {
          "id": "PH",
          "label": "PH"
        },
        {
          "id": "Pr",
          "label": "Pr"
        },
        {
          "id": "Rc",
          "label": "Rc"
        },
        {
          "id": "Rf",
          "label": "Rf"
        },
        {
          "id": "Ro/Ro+",
          "label": "Ro/Ro+"
        },
        {
          "id": "Rx",
          "label": "Rx"
        },
        {
          "id": "S1-MME",
          "label": "S1-MME"
        },
        {
          "id": "S1-U",
          "label": "S1-U"
        },
        {
          "id": "S10",
          "label": "S10"
        },
        {
          "id": "S102",
          "label": "S102"
        },
        {
          "id": "S11",
          "label": "S11"
        },
        {
          "id": "S13",
          "label": "S13"
        },
        {
          "id": "S1AP",
          "label": "S1AP"
        },
        {
          "id": "S2a",
          "label": "S2a"
        },
        {
          "id": "S2b",
          "label": "S2b"
        },
        {
          "id": "S3-S10",
          "label": "S3-S10"
        },
        {
          "id": "S4",
          "label": "S4"
        },
        {
          "id": "S4-S12",
          "label": "S4-S12"
        },
        {
          "id": "S5-S8",
          "label": "S5-S8"
        },
        {
          "id": "S6a",
          "label": "S6a"
        },
        {
          "id": "S6b",
          "label": "S6b"
        },
        {
          "id": "SGi",
          "label": "SGi"
        },
        {
          "id": "SGs",
          "label": "SGs"
        },
        {
          "id": "Sh",
          "label": "Sh"
        },
        {
          "id": "Si",
          "label": "Si"
        },
        {
          "id": "SLg",
          "label": "SLg"
        },
        {
          "id": "Sr",
          "label": "Sr"
        },
        {
          "id": "Sv",
          "label": "Sv"
        },
        {
          "id": "SWm",
          "label": "SWm"
        },
        {
          "id": "SWx",
          "label": "SWx"
        },
        {
          "id": "Sy",
          "label": "Sy"
        },
        {
          "id": "unknown",
          "label": "unknown"
        },
        {
          "id": "Ut",
          "label": "Ut"
        },
        {
          "id": "Wx",
          "label": "Wx"
        },
        {
          "id": "X3",
          "label": "X3"
        },
        {
          "id": "Zh",
          "label": "Zh"
        },
        {
          "id": "Zn",
          "label": "Zn"
        },
        {
          "id": "Zx",
          "label": "Zx"
        }
      ]
    ];

    // console.log('>> this.customFilterGroups',this.customFilterGroups);
    // console.log('>> this.customFilterItem',this.customFilterItem);
    // console.log('>> this.selectedCustomProps',this.selectedCustomProps);
    // console.log('>> this.mdmDataList',this.mdmDataList);

    for (const dim in this.customFilterItem) {
      if (Array.isArray(this.customFilterItem[dim])) {
        // console.log('>> ',this.customFilterItem[dim]);
        this.itemList.push(...this.customFilterItem[dim]);
      }
    }


    for (const key in this.itemList) {
      this.itemList[key] = {
        ...this.itemList[key],
        id: this.itemList[key].item,
        itemName: this.itemList[key].groupName + " - " + this.itemList[key].item.split(".")[1]
      }
    }

    // console.log('>> itemsList', this.itemList);

    this.settings = {
      singleSelection: true,
      text: "Select Dimension",
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
    };

    // for dimension property values
    this.propertiesList = [
      {
        id:"CommonMessages",
        itemName:"CommonMessages"
      },      
      {
        id:"Gn",
        itemName:"Gn"
      },
      {
        id:"Rx",
        itemName:"Rx"
      },
      {
        id:"GnGp",
        itemName:"GnGp"
      },
      {
        id:"S11",
        itemName:"S11"
      }
    ];

    this.propertiesSettings = {
      singleSelection: false,
      text: "Select Values",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 1
    };

    // this.onAddClick();
  }

  onAddClick(){
    // add new group
    // for (const key in this.itemList) {
    //   this.itemList[key] = {
    //     ...this.itemList[key],
    //     id: this.itemList[key].item,
    //     itemName: this.itemList[key].groupName + " - " + this.itemList[key].item.split(".")[1]
    //   }
    // }
    
    this.dimensionGroupsTracker[this.numOfProps.length] = {
      itemsList:this.itemList,
      selectedItems:[],
    }

    this.propValuesTracker[this.numOfProps.length] = {
      propertiesList: this.propertiesList,
      selectedPropertVals: []
    }
    this.numOfProps.push(this.numOfProps.length);


    console.log('>> dimensionGroupsTracker',this.dimensionGroupsTracker);
    console.log('>> propValuesTracker',this.propValuesTracker);
    
    
  }

  onItemSelect(item: any) {
    console.log('>> onItemSelect', item);
    console.log('>> onItemSelect', this.selectedItems);
  }

  onPropSelect(item: any) {
    console.log('>> onPropSelect', item);
    console.log('>> onPropSelect', this.selectedPropertVals);
  }

  OnItemDeSelect(item: any) {
    console.log('>> onItemDeSelect', item);
    console.log('>> onItemDeSelect', this.selectedItems);
  }
  
  OnPropDeSelect(item: any) {
    console.log('>> OnPropDeSelect', item);
    console.log('>> OnPropDeSelect', this.selectedPropertVals);
  }

  onSelectAll(items: any) {
    console.log('>> onSelectAll', items);
  }

  onDeSelectAll(items: any) {
    console.log('>> onDeSelectAll', items);
  }

  getDimensionPropVals(){
    console.log('>> getDimensionPropVals',this.selectedItems);
    
  }
}
