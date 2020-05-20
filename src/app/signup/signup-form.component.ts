import { Component } from '@angular/core';
import { User } from './signup.interface';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  public user: User = {
    name: 'Semlinker',
    account: {
      email: '',
      confirm: ''
    }
  };
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}
