import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dor',
  templateUrl: './dor.component.html',
  styleUrls: ['./dor.component.scss']
})
export class DorComponent implements OnInit {


  // 1. number of groups
  numOfGroups: number[] = [];

  selectedCustomFilters: any = {};

  constructor() { }

  ngOnInit() {
    this.onAddClick();
  }

  ngOnDestroy() {
  }

  onAddClick() {
    this.numOfGroups.push(this.numOfGroups.length);
  }

  onDeleteClick(index: number) {
    this.numOfGroups = this.numOfGroups.filter(i => i !== index);
  }

  dimensionChanged(data: any) {
    console.log('>> Dimension changed', data);
    const newObj = { dimName: data.value.name, values: [] };

    this.selectedCustomFilters[data.index] = newObj;
    console.log('>> tracker', this.selectedCustomFilters);
  }

  propValsChanged(data: any) {
    console.log('>> dim prop vals', data);
    this.selectedCustomFilters[data.index].values = data.values;
    console.log('>> tracker', this.selectedCustomFilters);
  }
}
