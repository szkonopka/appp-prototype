import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ActivitiesHubComponent } from './components/activities-hub/activities-hub.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DependenciesComponent } from './components/dependencies/dependencies.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ProjectComponent,
    TasksComponent,
    ActivitiesHubComponent,
    HeaderComponent,
    TimelineComponent,
    DependenciesComponent
  ],
  exports: [
    ProjectComponent
  ] 
})
export class ProjectModule { }
