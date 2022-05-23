import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { FilterItem } from './data/custom-filters-data';
import { Bank } from "./data/demo-data";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(private msalService: MsalService){

  }

  defaultValue = [{ name: 'Bank R', id: 'R' }];

  selectedItems:FilterItem[] = [];

  selectionChanged(values: FilterItem[]) {
    console.log('>> Selection changed', values);
    this.selectedItems = values;
  }

  selectedDimPropValsChanged(values:any){
    console.log('>> dim prop vals',values);
    
  }

  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then((response)=>{
      if(response && response.account){
        this.msalService.instance.setActiveAccount(response.account);
      }
    })
  }

  isLoggedIn(){
    return this.msalService.instance.getActiveAccount() != null;
  }

  onLogin(){
    this.msalService.loginRedirect();
    // this.msalService.loginPopup().subscribe((response: AuthenticationResult)=>{
    //   this.msalService.instance.setActiveAccount(response.account);
    // },(e)=>{
    //   console.log(e);
    // })
  }

  logout(){
    this.msalService.logout();
  }
}
