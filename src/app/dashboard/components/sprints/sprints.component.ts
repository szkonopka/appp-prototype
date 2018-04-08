import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../shared/services/project.service';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.sass']
})
export class SprintsComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

}
