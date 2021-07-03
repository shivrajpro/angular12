import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { FilterGroup, FilterGroups, FilterItem, FilterItems } from '../../data/custom-filters-data';

@Component({
  selector: 'app-custom-filter-group',
  templateUrl: './custom-filter-group.component.html',
  styleUrls: ['./custom-filter-group.component.scss']
})
export class CustomFilterGroupComponent implements OnInit {

  // props for multi select dropdown
  // 2. selectedValues should be bound to whatever is selected
  @Input() selectedValues: FilterItem[] = [];
  // 3. output whenever a change is made to selectedValues
  @Output() selectedValuesChange = new EventEmitter();

  public tooltipMessage = 'Select All / Unselect All';

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  // props for custom filter component
  // 1. number of groups
  public numOfGroups: number[] = [];

  /** control for the selected dimension for option groups */
  public dimensionCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public dimensionFilterCtrl: FormControl = new FormControl();

  /** list of filter groups filtered by search keyword for option groups */
  public filteredDimensions: ReplaySubject<FilterGroup[]> = new ReplaySubject<FilterGroup[]>(1);

  /** list of filter groups */
  protected filterGroups: FilterGroup[] = FilterGroups;

  @ViewChild('singleSelect') singleSelect: MatSelect;

  @Input() selectedDimension: FilterItem = {id:"", name:""};

  @Output() selectedDimensionChange = new EventEmitter();


  // props for dimension property values multi-select
  protected dimPropVals: FilterItem[] = FilterItems;

  public propValFilterCtrl: FormControl = new FormControl();

  public filterMultiCtrl: FormControl = new FormControl();

  public filteredPropValsMulti: ReplaySubject<FilterItem[]> = new ReplaySubject<FilterItem[]>(1);

  public propValsTooltip: string = "";

  constructor() { }

  ngOnInit() {
    // set initial selection
    // this.bankMultiCtrl.setValue([this.banks[10], this.banks[11], this.banks[12]]);

    this.dimensionCtrl.setValue(this.filterGroups[1].filterItems[0]);
    this.filteredDimensions.next(this.filterGroups.slice());
    // listen for search field value changes
    this.dimensionFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterDimensions();
      });

    // load the initial values list
    this.filteredPropValsMulti.next(this.dimPropVals.slice());

    // load the initial groups list
    this.filteredDimensions.next(this.copyFilterGroups(this.filterGroups));

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

  dimensionChange(value:FilterItem){
    this.selectedDimensionChange.emit(value);
    // this.selectedDimension = value;
  }

  valuesChange(values: FilterItem[]) {
    this.selectedValuesChange.emit(values);

    const selectedNames = values.map(v => v.name);
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
        this.selectedValuesChange.emit(this.selectedValues);
      });
    const selectedNames = this.selectedValues.map(v => v.name);

    this.propValsTooltip = selectedNames.join();

  }

  /**
   * Sets the initial value after the filtered items are loaded initially
   */
  protected setInitialValue() {
    this.filteredDimensions.pipe((take(1), takeUntil(this._onDestroy)))
    .subscribe(()=>{
      this.singleSelect.compareWith = (a: FilterItem, b: FilterItem) => a && b && a.id === b.id;      
    })
  
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

  protected filterDimensions() {
    if (!this.filterGroups) {
      return;
    }
    // get the search keyword
    let search = this.dimensionFilterCtrl.value;
    if (!search) {
      this.filteredDimensions.next(this.filterGroups.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the items
    this.filteredDimensions.next(
      this.filterGroups.filter(item => item.name.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterDimPropVals() {
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
    let search = this.dimensionFilterCtrl.value;
    const filterGroupsCopy = this.copyFilterGroups(this.filterGroups);
    if (!search) {
      this.filteredDimensions.next(filterGroupsCopy);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the groups
    this.filteredDimensions.next(
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
