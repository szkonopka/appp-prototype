import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Project } from '../../../shared/models/project';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[];
  
  constructor() { }

  ngOnInit() {

  }

}
