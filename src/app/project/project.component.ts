import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { setInterval } from 'timers';
import { ProjectService } from '../shared/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.project = this.projectService.getProject(params['ProjectId']);
    })
  }

}
