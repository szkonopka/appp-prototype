import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.sass']
})
export class ContentContainerComponent implements OnInit {

  constructor(private dashboardService : DashboardService) { }

  ngOnInit() {
    
  }

}
