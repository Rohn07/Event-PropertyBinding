import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  public form = ""; // variable for the taking the input from the user
  public temp = ""; // variable for binding the property. 
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.temp = this.form;
  }

}
