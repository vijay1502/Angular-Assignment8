import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit {
  public message="";
  constructor() { }

  ngOnInit() {
  }
  myMessage(value){
    this.message=value ;
  }

}
