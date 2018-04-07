import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../shared/services/project.service';
import { Project } from '../../../shared/models/project';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  routeToProject(project: Project) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "project": project,
      }
    };

    this.router.navigate(["projects/" + project.Slug], navigationExtras);
  }

}
