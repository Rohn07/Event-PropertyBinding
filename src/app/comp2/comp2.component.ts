import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  public number = "";
  public temp = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.temp = this.number;
  }

}
