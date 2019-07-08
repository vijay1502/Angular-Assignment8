import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.css']
})
export class Com1Component implements OnInit {
  message:any;
  constructor(private Tasker:TaskService) { }

  ngOnInit() {
    this.Tasker.message.subscribe(data=>{ this.message=data;
  });}

}
