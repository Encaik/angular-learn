import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name="home";
  todo="go home";

  constructor() {
    
  }

  ngOnInit(): void {
  }

  onClick() {
    this.todo = "dont go home";
  }
}
