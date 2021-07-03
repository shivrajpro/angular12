import { Component } from '@angular/core';
import { FilterItem } from './data/custom-filters-data';
import { Bank } from "./data/demo-data";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  defaultValue = [{ name: 'Bank R', id: 'R' }];

  selectedItems:FilterItem[] = [];

  selectionChanged(values: FilterItem[]) {
    console.log('>> Selection changed', values);
    this.selectedItems = values;
  }

  selectedDimPropValsChanged(values:any){
    console.log('>> dim prop vals',values);
    
  }
}
