import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  public name = "Angular"; // first line
  public form = ""; // variable for the taking the input from the user
  public greet = ""; // variable for binding the property. 
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.greet = this.form;
  }

}
