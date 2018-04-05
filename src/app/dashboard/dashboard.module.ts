import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SidebarComponent,
    DashboardComponent,
    ContentContainerComponent,
    TasksListComponent,
    StatisticsComponent,
    ScheduleComponent,
    InfoBarComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
