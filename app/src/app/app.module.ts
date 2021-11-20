import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShysterComponent } from './shyster/shyster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MainPageComponent } from './main-page/main-page.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MatDividerModule } from '@angular/material/divider'
import { MatRippleModule } from '@angular/material/core';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { VideosPageComponent } from './videos-page/videos-page.component';
import { GamingPageComponent } from './gaming-page/gaming-page.component';
import { VtubersPageComponent } from './vtubers-page/vtubers-page.component';
import { RadioPageComponent } from './radio-page/radio-page.component'

@NgModule({
  declarations: [
    AppComponent,
    ShysterComponent,
    MainPageComponent,
    MainNavigationComponent,
    VideosPageComponent,
    GamingPageComponent,
    VtubersPageComponent,
    RadioPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatRippleModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
