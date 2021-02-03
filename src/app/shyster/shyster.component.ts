import { Component } from '@angular/core';

@Component({
  selector: 'app-shyster',
  templateUrl: './shyster.component.html',
  styleUrls: ['./shyster.component.scss']
})
export class ShysterComponent {

  name = "Cpt Johnny Walker";
  profilePicture = "https://material.angular.io/assets/img/examples/shiba1.jpg";
  currentGame = "Halo MCC";
  status = "yeet";
  role = "CEO";

  constructor() {
  }

}
