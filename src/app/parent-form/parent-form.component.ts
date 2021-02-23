import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import * as _ from 'lodash';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  // styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {
  constructor(){
  }

  ngOnInit(): void {
    this.initCVAForm();
  }

  initialForm = {
    nameInput: {
      first_name: 'Thomas',
      last_name: 'Thomasson'
    },
    contactInput: {
      email: '',
      worksOnWeekends: false
    }
  };


  /*******************Control Value Accessor ***************/

  cvaHasChanged = false;

  parentCVAForm: FormGroup = new FormGroup({
    nameInput: new FormControl(),
    contactInput: new FormControl()
  })

  initCVAForm(){
    this.parentCVAForm.get('nameInput').setValue(this.initialForm.nameInput);
    this.parentCVAForm.get('contactInput').setValue(this.initialForm.contactInput);

    this.parentCVAForm.valueChanges.subscribe(_ => {
      // console.log("CVA parentFormHasChanged")
      this.cvaHasChanged =
        JSON.stringify(this.parentCVAForm.value) !== JSON.stringify(this.initialForm)
    })
  }

  onCVASubmit(){
    console.log('ControlValueAccessor Form: ' , this.parentCVAForm.value)
  }

  resetCVAForm(){
    this.parentCVAForm.reset(this.initialForm)
    this.parentCVAForm.markAsPristine();
  }
  /********************Control Container*************************/

  parentCCForm = new FormGroup({});

  onCCSubmit(){
    console.log('ControlContainer Form: ' , this.parentCCForm.value);
  }


}
