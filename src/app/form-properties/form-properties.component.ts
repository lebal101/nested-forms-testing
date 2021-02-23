import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-properties',
  templateUrl: './form-properties.component.html'
  // styleUrls: ['./form-properties.component.scss']
})
export class FormPropertiesComponent implements OnInit {

  @Input()
  form: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
