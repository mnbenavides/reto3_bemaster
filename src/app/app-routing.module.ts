import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { VideosComponent} from './components/videos/videos.component';
import { PlayerComponent} from './components/player/player.component';
import { AnalyticsComponent} from './components/analytics/analytics.component';
import { SettingsComponent} from './components/settings/settings.component';


const routes: Routes = [
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'videos', component: VideosComponent
  },
  {
    path:'', redirectTo: 'dashboard',pathMatch: 'full'
  },
  {
    path:'player', component: PlayerComponent
  },
  {
    path:'analytics', component: AnalyticsComponent
  },
  {
    path:'settings', component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
