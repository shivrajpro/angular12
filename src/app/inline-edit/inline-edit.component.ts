import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss']
})
export class InlineEditComponent implements OnInit {

  @Input() label = '';
  @Input() fcName = '';
  @Input() value = ''
  inputModel = '';
  @Output() inputSaved = new EventEmitter();

  editing = false;
  constructor() { }

  ngOnInit(): void {
    this.inputModel = this.value;
  }

  onSave(){
    this.editing = false;
    this.inputSaved.emit(this.inputModel);
  }
}
