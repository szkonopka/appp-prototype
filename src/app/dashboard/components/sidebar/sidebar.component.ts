import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor(private dashboardService : DashboardService) { }

  ngOnInit() {
  }

  switchContainer(containerId: number) {
    this.dashboardService.currentModuleContainer = this.dashboardService.moduleContainers[containerId];
    const sidebarOptions = document.querySelectorAll('.sidebar__option');

    for(let i = 0; i < sidebarOptions.length; i++) {
      sidebarOptions[i].classList.remove('sidebar__option_active');
    }

    sidebarOptions[containerId].classList.add('sidebar__option_active');
  }
}
 