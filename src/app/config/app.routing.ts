import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProjectComponent } from '../project/project.component';
import { Routes } from '@angular/router/src/config';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'projects/:slug', component: ProjectComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { enableTracing: true });