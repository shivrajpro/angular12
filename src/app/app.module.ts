import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from "@angular/material/input";
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
import { CustomFilterGroupComponent } from './dor/custom-filter-group/custom-filter-group.component';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';
import { MicrosoftLoginComponent } from './microsoft-login/microsoft-login.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth:{
      clientId:'bc0e6bfb-f8d6-4ed1-aad9-3d5a27522863',
      redirectUri:'http://localhost:4200/'
    }
  })
}
@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    InfiniteScrollExampleComponent,
    CuppaLabsComponent,
    CustomFilterComponent,
    EmpirixComponent,
    DorComponent,
    CustomFilterGroupComponent,
    PublicPageComponent,
    RestrictedPageComponent,
    MicrosoftLoginComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMatSelectSearchModule,
    MatSelectInfiniteScrollModule,
    MatTooltipModule,
    AngularMultiSelectModule,
    MatButtonModule,
    MatIconModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory:MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
