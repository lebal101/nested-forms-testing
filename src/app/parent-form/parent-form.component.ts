import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {

  initialForm = {
    nameInput: {
      first_name: 'Thomas',
      last_name: 'Thomasson'
    },
    contactInput: {
      email: ''
    }
  };
  hasChanged = false;

  parentForm: FormGroup = new FormGroup({
    nameInput: new FormControl(),
    contactInput: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
    this.parentForm.get('nameInput').setValue(this.initialForm.nameInput);
    this.parentForm.get('contactInput').setValue(this.initialForm.contactInput);

    this.parentForm.valueChanges.subscribe(_ => {
      console.log("parentFormHasChanged")
      this.hasChanged =
        JSON.stringify(this.parentForm.value) !== JSON.stringify(this.initialForm)
    })
  }

  onSubmit(){
    console.log(this.parentForm.value)
  }

  resetForm(){
    this.parentForm.reset(this.initialForm)
    this.parentForm.markAsPristine();
  }

  formHasChanged(){
    console.log("hasChanged is " +  this.hasChanged)
    return this.hasChanged;
  }

}
