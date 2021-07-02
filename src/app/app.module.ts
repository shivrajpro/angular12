import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectInfiniteScrollModule } from 'ng-mat-select-infinite-scroll';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InfiniteScrollExampleComponent } from './multi-select/infinite-scroll-example/infinite-scroll-example.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CuppaLabsComponent } from './cuppa-labs/cuppa-labs.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { CustomFilterComponent } from './custom-filter/custom-filter.component';
import { EmpirixComponent } from './empirix/empirix.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DorComponent } from './dor/dor.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    InfiniteScrollExampleComponent,
    CuppaLabsComponent,
    CustomFilterComponent,
    EmpirixComponent,
    DorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatSelectInfiniteScrollModule,
    MatTooltipModule,
    AngularMultiSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
