import { Component } from '@angular/core';
import { Bank } from "./data/demo-data";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  defaultValue = [{ name: 'Bank R', id: 'R' }];

  selectedBanks:Bank[] = [];

  selectionChanged(values: Bank[]) {
    console.log('Selection changed', values);
    this.selectedBanks = values;
  }
}
