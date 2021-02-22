import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-cc-name-input',
  templateUrl: './cc-name-input.component.html',
  // styleUrls: ['./cc-name-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class CcNameInputComponent implements OnInit {
  parentForm: FormGroup;
  constructor(private parent: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.parentForm.addControl('nameInput', new FormGroup({
      first_name: new FormControl('Nils', [Validators.required]),
      last_name: new FormControl('Nilsson', [Validators.required])
    }))
  }

}
