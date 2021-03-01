import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-cc-contact-input',
  templateUrl: './cc-contact-input.component.html',
  // styleUrls: ['./cc-contact-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class CcContactInputComponent implements OnInit {
  parentForm:  FormGroup;
  constructor(private parent: FormGroupDirective) { }

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.parentForm.addControl('contactInput', new FormGroup({
      email: new FormControl('', [Validators.email]),
      worksOnWeekends: new FormControl(false)
    }))
  }
}
