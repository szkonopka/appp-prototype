import { Component, OnInit, Inject } from '@angular/core';
import { ProjectService } from '../../../shared/services/project.service';
import { Project } from '../../../shared/models/project';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.sass']
})
export class TasksListComponent implements OnInit {
  @Input() project: Project;

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
  }

}
