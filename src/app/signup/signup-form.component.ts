import { Component } from '@angular/core';
import { User } from './signup.interface';

@Component({
  selector: 'signup-form',
  template: `
    <form novalidate #f="ngForm">
      <label>
        <span>Full name</span>
        <input
          type="text"
          name="name"
          placeholder="Your full name">
          <!-- [(ngModel)]="user.name" -->
      </label>
      <div>
        <label>
          <span>Email address</span>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            ngModel>
        </label>
        <label>
          <span>Confirm address</span>
          <input
            type="email"
            name="confirm"
            placeholder="Confirm your email address"
            ngModel>
        </label>
      </div>
      <button type="submit">Sign up</button>
    </form>
    <!-- <span>{{ user | json }}</span> -->
  `
})
export class SignupFormComponent {
  public user: User = {
    name: 'Semlinker',
    account: {
      email: '',
      confirm: ''
    }
  };
}
