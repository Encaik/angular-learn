import { Component, OnInit } from '@angular/core';

interface FormItemOption {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  options?: string[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = "home";
  todo = "go home";
  config: FormItemOption[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name'
    },
    {
      type: 'input',
      label: 'First name',
      name: 'fname',
      placeholder: 'Enter your first name'
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option'
    },
    {
      type: 'button',
      label: 'Submit',
      name: 'submit'
    }
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

  onClick() {
    this.todo = "dont go home";
  }

  formSubmitted(value: any) {
    console.log(value);
  }
}
