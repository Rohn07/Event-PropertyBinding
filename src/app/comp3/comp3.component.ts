import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  
  public text = "";
  public input = false;
  constructor() { }

  ngOnInit(): void {
  }

  disableMethod() {
      if(this.text) {
        this.input = true;
    }
  }
}
