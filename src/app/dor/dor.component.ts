import { Component, OnInit } from '@angular/core';
import { FilterItem } from '../data/custom-filters-data';

@Component({
  selector: 'app-dor',
  templateUrl: './dor.component.html',
  styleUrls: ['./dor.component.scss']
})
export class DorComponent implements OnInit {


  // 1. number of groups
  numOfGroups: number[] = [];

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

  selectionChanged(values: FilterItem[]) {
    console.log('>> Selection changed', values);
  }

  selectedDimPropValsChanged(values:any){
    console.log('>> dim prop vals',values);
  }  
}
