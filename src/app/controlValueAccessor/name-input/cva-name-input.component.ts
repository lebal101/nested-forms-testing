import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-cva-name-input',
  templateUrl: './cva-name-input.component.html',
  // styleUrls: ['./cva-name-input.component.scss'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => CVANameInputComponent),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => CVANameInputComponent),
   multi: true
 }
]
})
export class CVANameInputComponent implements OnInit, ControlValueAccessor, Validator{
  nameInputForm: FormGroup = new FormGroup({
    first_name: new FormControl('',[Validators.required]),
    last_name: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    console.log("cva-name-input: write")
    if(val){
      // console.log(val)
      // this.nameInputForm.get('first_name').setValue(val.name);
      // this.nameInputForm.setValue(val);
      this.nameInputForm.setValue(val, { emitEvent: false });
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
  validate(control: AbstractControl): ValidationErrors {
    return this.nameInputForm.valid ? null :
    { invalidForm: {valid: false, message: "nameInputForm fields are invalid"}};
  }
}
