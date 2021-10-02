import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToMainPage(): void {
    const navigationDetails: string[] = ['/'];
    this.router.navigate(navigationDetails);
  }

  goToVideosPage(): void {
    const navigationDetails: string[] = ['/videos-page'];
    this.router.navigate(navigationDetails);
  }

  goToGamingPage(): void {
    const navigationDetails: string[] = ['/gaming-page'];
    this.router.navigate(navigationDetails);
  }

  goToRadioPage(): void {
    const navigationDetails: string[] = ['/radio-page'];
    this.router.navigate(navigationDetails);
  }

  goToVtubersPage(): void {
    const navigationDetails: string[] = ['/vtubers-page'];
    this.router.navigate(navigationDetails);
  }

}
