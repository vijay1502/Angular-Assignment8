import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.css']
})
export class Compo3Component implements OnInit {
  @Input() public DataParent;
  constructor() { }

  ngOnInit() {
  }

}
