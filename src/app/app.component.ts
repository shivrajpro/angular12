import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MsalService } from '@azure/msal-angular';
import { FilterItem } from './data/custom-filters-data';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form:FormGroup;
  title = 'my-app';

  createForm(){
    this.form = new FormGroup({
      age:new FormControl(null)
    })
  }

  listenToAgeChange(){
    this.form.controls.age.valueChanges.subscribe(age=>{
      if(isNaN(age)){
        this.form.controls.age.setErrors({invalidNumber:true})  // <--- Set invalidNumber to true 
      }else{
        this.form.controls.age.setErrors(null)
      }
      console.log('qq form',this.form);
      
    })
  }  
  
  constructor(
    private msalService: MsalService, 
    private formBuilder: FormBuilder  
  ){}

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
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    });

    this.createForm();
    this.listenToAgeChange();
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


  setError(){
    this.loginForm.controls.email.setErrors({blank: true});
  }
  removeError(){
    this.loginForm.controls.email.setErrors({blank: null});
  }
  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }  
}
