import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-microsoft-login',
  templateUrl: './microsoft-login.component.html',
  styleUrls: ['./microsoft-login.component.scss']
})
export class MicrosoftLoginComponent implements OnInit {

  constructor(
    private msalService: MsalService, 
  ){}

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
