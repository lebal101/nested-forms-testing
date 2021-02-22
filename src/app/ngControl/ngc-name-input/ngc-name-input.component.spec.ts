import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcNameInputComponent } from './ngc-name-input.component';

describe('NgcNameInputComponent', () => {
  let component: NgcNameInputComponent;
  let fixture: ComponentFixture<NgcNameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcNameInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
