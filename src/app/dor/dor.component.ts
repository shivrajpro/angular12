import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CustomFilterGroups, FilterGroup, FilterGroups } from '../data/custom-filters-data';
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

  /** list of banks */
  protected banks: Bank[] = BANKS;

  /** control for the selected bank for multi-selection */
  public bankMultiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public bankMultiFilterCtrl: FormControl = new FormControl();

  /** list of banks filtered by search keyword */
  public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  public tooltipMessage = 'Select All / Unselect All';

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  // props for single select
  /** list of bank groups */
  protected bankGroups: BankGroup[] = BANKGROUPS;

  /** control for the selected bank for option groups */
  public bankGroupsCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword for option groups */
  public bankGroupsFilterCtrl: FormControl = new FormControl();

  /** list of bank groups filtered by search keyword for option groups */
  public filteredBankGroups: ReplaySubject<BankGroup[]> = new ReplaySubject<BankGroup[]>(1);


  // props for custom filter component
  // 1. number of groups
  public numOfGroups: number[] = [];

  public filterGroupsCtrl: FormControl = new FormControl();


  public filterGroupsFilterCtrl: FormControl = new FormControl();

  public filteredCustomFilterGroups: ReplaySubject<FilterGroup[]> = new ReplaySubject<FilterGroup[]>(1);

  protected filterGroups: FilterGroup[] = FilterGroups;

  constructor() { }

  ngOnInit() {
    // set initial selection
    // this.bankMultiCtrl.setValue([this.banks[10], this.banks[11], this.banks[12]]);

    // load the initial bank list
    this.filteredBanksMulti.next(this.banks.slice());

    // listen for search field value changes
    this.bankMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti();
      });

    // load the initial bank list
    this.filteredBankGroups.next(this.copyBankGroups(this.bankGroups));

    this.filteredCustomFilterGroups.next(this.copyFilterGroups(this.filterGroups));

    // listen for search field value changes
    this.bankGroupsFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBankGroups();
      });

    this.filterGroupsFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCustomFilterGroups();
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

  toggleSelectAll(selectAllValue: boolean) {
    this.filteredBanksMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (selectAllValue) {
          this.bankMultiCtrl.patchValue(val);
          this.selectedValues = this.banks.slice();
        } else {
          this.bankMultiCtrl.patchValue([]);
          this.selectedValues = [];
        }
        this.selectionChange.emit(this.selectedValues);
      });
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue() {
    this.filteredBanksMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        if (this.multiSelect)
          this.multiSelect.compareWith = (a: Bank, b: Bank) => a && b && a.id === b.id;
      });
  }

  protected filterBanksMulti() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) {
      this.filteredBanksMulti.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti.next(
      this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterBankGroups() {
    if (!this.bankGroups) {
      return;
    }
    // get the search keyword
    let search = this.bankGroupsFilterCtrl.value;
    const bankGroupsCopy = this.copyBankGroups(this.bankGroups);
    if (!search) {
      this.filteredBankGroups.next(bankGroupsCopy);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBankGroups.next(
      bankGroupsCopy.filter(bankGroup => {
        const showBankGroup = bankGroup.name.toLowerCase().indexOf(search) > -1;
        if (!showBankGroup) {
          bankGroup.banks = bankGroup.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1);
        }
        return bankGroup.banks.length > 0;
      })
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
    // filter the banks
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

  protected copyBankGroups(bankGroups: BankGroup[]) {
    const bankGroupsCopy: BankGroup[] = [];
    bankGroups.forEach(bankGroup => {
      bankGroupsCopy.push({
        name: bankGroup.name,
        banks: bankGroup.banks.slice()
      });
    });
    return bankGroupsCopy;
  }

  protected copyFilterGroups(filterGroups:FilterGroup[]){
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
