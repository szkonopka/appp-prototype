import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { OptionsComponent } from './components/options/options.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DashboardService } from './services/dashboard.service';

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
    InfoBarComponent,
    NewsfeedComponent,
    ActivitiesComponent,
    OptionsComponent,
    ProjectsComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DashboardService
  ],
})
export class DashboardModule { }
