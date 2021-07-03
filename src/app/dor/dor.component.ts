import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CustomFilterGroups, FilterGroup, FilterGroups, FilterItem, FilterItems } from '../data/custom-filters-data';
import { Bank, BANKS, BankGroup, BANKGROUPS } from '../data/demo-data';

@Component({
  selector: 'app-dor',
  templateUrl: './dor.component.html',
  styleUrls: ['./dor.component.scss']
})
export class DorComponent implements OnInit {

  // props for multi select dropdown
  // 2. selectedValues should be bound to whatever is selected
  @Input() selectedValues: Bank[] = [];
  // 3. output whenever a change is made to selectedValues
  @Output() selectionChange = new EventEmitter();

  public tooltipMessage = 'Select All / Unselect All';

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();



  // props for custom filter component
  // 1. number of groups
  public numOfGroups: number[] = [];

  /** control for the selected dimension for option groups */
  public filterGroupsCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public filterGroupsFilterCtrl: FormControl = new FormControl();

  /** list of filter groups filtered by search keyword for option groups */
  public filteredCustomFilterGroups: ReplaySubject<FilterGroup[]> = new ReplaySubject<FilterGroup[]>(1);

  /** list of filter groups */
  protected filterGroups: FilterGroup[] = FilterGroups;

  @Input() selectedDimensions: FilterItem[] = [];

  @Output() selectedDimensionsChange = new EventEmitter();



  // props for dimension property values multi-select
  protected dimPropVals: FilterItem[] = FilterItems;

  public propValFilterCtrl: FormControl = new FormControl();

  public filterMultiCtrl: FormControl = new FormControl();

  public filteredPropValsMulti: ReplaySubject<FilterItem[]> = new ReplaySubject<FilterItem[]>(1);

  public propValsTooltip:string = "";

  constructor() { }

  ngOnInit() {
    // set initial selection
    // this.bankMultiCtrl.setValue([this.banks[10], this.banks[11], this.banks[12]]);

    // load the initial values list
    this.filteredPropValsMulti.next(this.dimPropVals.slice());

    // load the initial groups list
    this.filteredCustomFilterGroups.next(this.copyFilterGroups(this.filterGroups));

    // listen for search field value changes
    this.filterGroupsFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCustomFilterGroups();
      });


      this.propValFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterDimPropVals();
      });      
    this.onAddClick();
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  onAddClick() {
    this.numOfGroups.push(this.numOfGroups.length);
  }

  onDeleteClick(index: number) {
    this.numOfGroups = this.numOfGroups.filter(i => i !== index);
  }

  selectedValuesChange(values:FilterItem[]){
    this.selectionChange.emit(values);

    const selectedNames = values.map(v=>v.name);
    this.propValsTooltip = selectedNames.join();
  }

  toggleSelectAll(selectAllValue: boolean) {
    this.filteredPropValsMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (selectAllValue) {
          this.filterMultiCtrl.patchValue(val);
          this.selectedValues = this.dimPropVals.slice();
        } else {
          this.filterMultiCtrl.patchValue([]);
          this.selectedValues = [];
        }
        this.selectionChange.emit(this.selectedValues);
      });
      const selectedNames = this.selectedValues.map(v=>v.name);
    
      this.propValsTooltip = selectedNames.join();
  
  }

  /**
   * Sets the initial value after the filtered items are loaded initially
   */
  protected setInitialValue() {
    this.filteredPropValsMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filtered items are loaded initially
        // and after the mat-option elements are available
        if (this.multiSelect)
          this.multiSelect.compareWith = (a: FilterItem, b: FilterItem) => a && b && a.id === b.id;
      });
  }

  protected filterDimPropVals(){
    if (!this.dimPropVals) {
      return;
    }
    // get the search keyword
    let search = this.propValFilterCtrl.value.name;
    if (!search) {
      this.filteredPropValsMulti.next(this.dimPropVals.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the items
    this.filteredPropValsMulti.next(
      this.dimPropVals.filter(prop => prop.name.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterCustomFilterGroups() {
    if (!this.filterGroups) {
      return;
    }
    // get the search keyword
    let search = this.filterGroupsFilterCtrl.value;
    const filterGroupsCopy = this.copyFilterGroups(this.filterGroups);
    if (!search) {
      this.filteredCustomFilterGroups.next(filterGroupsCopy);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the groups
    this.filteredCustomFilterGroups.next(
      filterGroupsCopy.filter(filterGroup => {
        const showFilterGroup = filterGroup.name.toLowerCase().indexOf(search) > -1;
        if (!showFilterGroup) {
          filterGroup.filterItems = filterGroup.filterItems.filter(filterItem => filterItem.name.toLowerCase().indexOf(search) > -1);
        }
        return filterGroup.filterItems.length > 0;
      })
    );
  }

  protected copyFilterGroups(filterGroups: FilterGroup[]) {
    const filterGroupsCopy: FilterGroup[] = [];
    filterGroups.forEach(filterGroup => {
      filterGroupsCopy.push({
        name: filterGroup.name,
        filterItems: filterGroup.filterItems.slice()
      });
    });
    return filterGroupsCopy;
  }

}
