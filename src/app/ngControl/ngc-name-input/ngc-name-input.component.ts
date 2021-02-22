import { Component, OnInit, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NgControl, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-ngc-name-input',
  templateUrl: './ngc-name-input.component.html',
  styleUrls: ['./ngc-name-input.component.scss']
})
export class NgcNameInputComponent implements OnInit, ControlValueAccessor, Validator {

  nameInputForm: FormGroup = new FormGroup({
    first_name: new FormControl('',[Validators.required]),
    last_name: new FormControl('', [Validators.required])
  })

  constructor(@Self() public controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    let validators = control.validator?
      [control.validator, Validators.required]: Validators.required;
    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  // public onChange: () => void;

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    console.log("cva-name-input: write")
    if(val){
      // console.log(val)
      // this.nameInputForm.get('first_name').setValue(val.name);
      this.nameInputForm.setValue(val);
      // this.nameInputForm.setValue(val, { emitEvent: false });
    }
  }
  registerOnChange(fn: any): void {
    this.nameInputForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.nameInputForm.disable() : this.nameInputForm.enable();
  }
  validate(ctrl : AbstractControl): ValidationErrors {
    return this.nameInputForm.valid ? null :
    { invalidForm: {valid: false, message: "nameInputForm fields are invalid"}};
  }


}
