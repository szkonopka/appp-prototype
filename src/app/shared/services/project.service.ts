import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Task } from '../models/task';

@Injectable()
export class ProjectService {
  projects: Project[] = [
    new Project(0, "Mobile application for Rossman"),
    new Project(1, "PR Campaing for Empik"),
    new Project(2, "Family"),
    new Project(3, "Garden expansion")
  ];  

  constructor() {
    this.addTasksToProject();
   }

  addTasksToProject() {
    this.projects[0].ActiveTasks = [
      new Task(0, 0, "Unit test performance for HTTP GET methods for class from Database namespace", null, 0, 5),
      new Task(1, 0, "Clicking icon should open pop-over", null, 0, 7),
      new Task(2, 0, "Get SmartDashboard working: write a custom dashboard component", null, 0, 8),
    ];

    this.projects[1].ActiveTasks = [
      new Task(3, 1, "Feedback of facebook graphics", null, 0, 2),
      new Task(4, 1, "Write screenplay for the ad", null, 0, 4),
      new Task(5, 1, "Buy some sody pop", null, 0, 1),
      new Task(6, 1, "Create a brief for next meetings", null, 0, 4)
    ];

    this.projects[2].ActiveTasks = [
      new Task(7, 2, "Weekly shoping", null, 0, 4),
      new Task(8, 2, "Check kids homework", null, 0, 6),
      new Task(9, 2, "Repair dishwasher", null, 0, 2),
    ];

    this.projects[3].ActiveTasks = [
      new Task(10, 3, "Buy needed tools", null, 0, 2),
      new Task(10, 3, "Choose new paint for fence", null, 0, 2),
      new Task(10, 3, "Plant 3 ", null, 0, 2),
    ];
  }

  getProject(projectId: number) {
    return this.projects[projectId];
  }
}
