import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-reactive-forms-assignment',
  templateUrl: './reactive-forms-assignment.component.html',
  styleUrls: ['./reactive-forms-assignment.component.scss'],
})
export class ReactiveFormsAssignmentComponent implements OnInit {
  projectForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        '',
        [Validators.required],
        this.forbiddenProjectNames
      ),
      email: new FormControl('', [Validators.required, Validators.email]),
      projectStatus: new FormControl(''),
    });
  }

  onSubmit() {
    console.log('form', this.projectForm);
  }

  forbiddenProjectNames(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test') resolve({ forbiddenProjectName: true });
        resolve(null);
      }, 1500);
    });
    return promise as Promise<ValidationErrors | null>;
  }
}
