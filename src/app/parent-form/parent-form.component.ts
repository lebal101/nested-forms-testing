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
    // this.initNGCForm();
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
      console.log("parentFormHasChanged")
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

  cvaFormHasChanged(){
    // console.log("hasChanged is " +  this.cvaHasChanged)
    return this.cvaHasChanged;
  }

  /************************* NGControl ********************************************/

  // ngcHasChanged = false;

  // parentNGCForm: FormGroup = new FormGroup({
  //   nameInput: new FormControl(null, [Validators.minLength(3)]),
  //   // contactInput: new FormControl()
  // })

  // initNGCForm(){
  //   this.parentNGCForm.get('nameInput').setValue(this.initialForm.nameInput);
  //   // this.parentNGCForm.get('contactInput').setValue(this.initialForm.contactInput);

  //   this.parentNGCForm.valueChanges.subscribe(_ => {
  //     console.log("parentFormHasChanged")
  //     // console.log(this.parentNGCForm.value)
  //     this.ngcHasChanged =
  //       JSON.stringify(this.parentNGCForm.value) !== JSON.stringify(this.initialForm)
  //   })
  // }

  // onNGCSubmit(){
  //   console.log('NGControl Form:', this.parentNGCForm.value)
  // }

  // ngcFormHasChanged(){
  //   // console.log("hasChanged is " +  this.ngcHasChanged)
  //   return this.ngcHasChanged;
  // }

  // resetNGCForm(){
  //   this.parentNGCForm.reset(this.initialForm)
  //   this.parentNGCForm.markAsPristine();
  // }

  /********************Control Container*************************/

  parentCCForm = new FormGroup({});

  onCCSubmit(){
    console.log('ControlContainer Form: ' , this.parentCCForm.value);
  }


}
