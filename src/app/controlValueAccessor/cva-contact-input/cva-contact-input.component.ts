import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-cva-contact-input',
  templateUrl: './cva-contact-input.component.html',
  // styleUrls: ['./cva-contact-input.component.scss'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => CVAContactInputComponent),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => CVAContactInputComponent),
   multi: true
 }
]
})
export class CVAContactInputComponent implements ControlValueAccessor, Validator {

  contactInputForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.email]),
    worksOnWeekends: new FormControl('', [])
  })

  constructor() { }

  ngOnInit(): void {
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    console.log("write")
    if(val){
      // Auch möglich:
      // this.contactInputForm.get('name').setValue(val.name, {emitEvent: false});
      // this.contactInputForm.get('email').setValue(val.email, {emitEvent: false});

      this.contactInputForm.setValue(val, { emitEvent: false });
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
    // console.log('validate')
    return this.contactInputForm.valid ? null :
    { invalidForm: {valid: false, message: "nameInputForm fields are invalid"}};
  }
}
