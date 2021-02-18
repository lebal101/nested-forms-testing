import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => NameInputComponent),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => NameInputComponent),
   multi: true
 }
]
})
export class NameInputComponent implements OnInit, ControlValueAccessor, Validator{
  nameInputForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  })


  constructor() { }

  ngOnInit(): void {
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    if(val){
      // console.log(val)
      this.nameInputForm.get('name').setValue(val.name);
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
  validate(control: AbstractControl): ValidationErrors {
    // return Validators.required(control);
    console.log(this.nameInputForm.valid)
    return this.nameInputForm.valid ? null :
    { invalidForm: {valid: false, message: "nameInputForm fields are invalid"}};
  }
}
