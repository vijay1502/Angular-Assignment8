import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.css']
})
export class Com2Component implements OnInit {
  public message=[];
  constructor(private Tasker:TaskService) { }
  ngOnInit() {
  }
  getmess(){
    this.Tasker.message.next();  }
}
