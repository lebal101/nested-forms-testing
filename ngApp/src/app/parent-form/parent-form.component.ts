import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {

  parentForm: FormGroup = new FormGroup({
    nameInput: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
    let obj = {nameInput: {name: 'Leo'}}
    this.parentForm.setValue(obj);
  }

  onSubmit(){
    console.log(this.parentForm.value)
  }

}
