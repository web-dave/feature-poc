import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

export interface IFlightData {
  from: string;
  to: string;
}

export interface IFlightForm {
  from: FormControl<string>;
  to: FormControl<string>;
}

@Component({
  selector: 'app-form',
  template: ``,
})
export class FormComponent {
  form: FormGroup<IFlightForm> = this.fb.group({
    from: [''],
    to: [''],
  });
  constructor(private fb: NonNullableFormBuilder) {
    let _formValue: Partial<IFlightData> = this.form.value;
    let formValue: IFlightData = this.form.getRawValue();
  }
}
