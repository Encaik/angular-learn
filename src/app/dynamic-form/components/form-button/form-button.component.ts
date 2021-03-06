import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-button',
  template: `
    <div [formGroup]="group">
      <button type="submit">
        {{ config.label }}
      </button>
    </div>
  `
})
export class FormButtonComponent{
  config: any;
  group: FormGroup;
}
