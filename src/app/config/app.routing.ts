import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProjectsComponent } from '../dashboard/components/projects/projects.component';

const appRoutes = [
    { path: '', component: DashboardComponent },
    { path: '**', redirectTo: '' }
]

export const routing = RouterModule.forRoot(appRoutes, { enableTracing: true });