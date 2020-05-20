import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './signup.interface';

@Component({
  selector: 'signup-form',
  templateUrl: './signup2-form.component.html',
  styleUrls: ['./signup2-form.component.scss']
})
export class Signup2FormComponent implements OnInit {
  user: FormGroup;
  // ngOnInit() {
  //   this.user = new FormGroup({
  //     name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  //     account: new FormGroup({
  //       email: new FormControl('', Validators.required),
  //       confirm: new FormControl('', Validators.required)
  //     })
  //   });
  // }
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}
