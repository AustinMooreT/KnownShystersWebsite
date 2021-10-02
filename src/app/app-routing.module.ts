import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { VideosPageComponent } from './videos-page/videos-page.component';
import { GamingPageComponent } from './gaming-page/gaming-page.component';
import { RadioPageComponent } from './radio-page/radio-page.component';
import { VtubersPageComponent } from './vtubers-page/vtubers-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'videos-page', component: VideosPageComponent },
  { path: 'gaming-page', component: GamingPageComponent },
  { path: 'radio-page', component: RadioPageComponent },
  { path: 'vtubers-page', component: VtubersPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
