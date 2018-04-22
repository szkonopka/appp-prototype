import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  moduleContainers: string[] = ['summary', 'projects', 'statistics', 'sprints', 'settings'];
  currentModuleContainer: string = this.moduleContainers[0];

  constructor() { }

}
