import { Component } from '@angular/core';
import { User } from './signup.interface';

@Component({
  selector: 'signup-form',
  template: `
    <form (ngSubmit)="onSubmit(f)" #f="ngForm" novalidate>
      <label>
        <span>Full name</span>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          required
          [(ngModel)]="user.name">
      </label>
      <div ngModelGroup="account">
        <label>
          <span>Email address</span>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            [(ngModel)]="user.account.email">
        </label>
        <label>
          <span>Confirm address</span>
          <input
            type="email"
            name="confirm"
            placeholder="Confirm your email address"
            required
            [(ngModel)]="user.account.confirm">
        </label>
      </div>
      <button type="submit" [disabled]="f.invalid">Sign up</button>
      <p>{{ f.value | json }}</p>
      <p>{{ user | json }}</p>
    </form>
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
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}
