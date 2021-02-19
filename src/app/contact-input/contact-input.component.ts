import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.scss'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => ContactInputComponent),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => ContactInputComponent),
   multi: true
 }
]
})
export class ContactInputComponent implements ControlValueAccessor, Validator {

  contactInputForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.email])
  })

  constructor() { }

  ngOnInit(): void {
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    console.log("write")
    if(val){
      // console.log(val)
      // this.nameInputForm.get('name').setValue(val.name);
      this.contactInputForm.setValue(val);
      // this.nameInputForm.setValue(val, { emitEvent: false });
    }
  }
  registerOnChange(fn: any): void {
    this.contactInputForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.contactInputForm.disable() : this.contactInputForm.enable();
  }
  validate(control: AbstractControl): ValidationErrors {
    return this.contactInputForm.valid ? null :
    { invalidForm: {valid: false, message: "nameInputForm fields are invalid"}};
  }
}
