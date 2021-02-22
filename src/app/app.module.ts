import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentFormComponent } from './parent-form/parent-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CVANameInputComponent } from './controlValueAccessor/name-input/cva-name-input.component';
import { CVAContactInputComponent } from './controlValueAccessor/cva-contact-input/cva-contact-input.component';
import { CcNameInputComponent } from './controlContainer/cc-name-input/cc-name-input.component';
import { CcNameInputWrapperComponent } from './controlContainer/cc-name-input/cc-name-input-wrapper/cc-name-input-wrapper.component';
import { CcContactInputComponent } from './controlContainer/cc-contact-input/cc-contact-input.component';
import { NgcNameInputComponent } from './ngControl/ngc-name-input/ngc-name-input.component'



@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    CVANameInputComponent,
    CVAContactInputComponent,
    CcNameInputComponent,
    CcNameInputWrapperComponent,
    CcContactInputComponent,
    NgcNameInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
