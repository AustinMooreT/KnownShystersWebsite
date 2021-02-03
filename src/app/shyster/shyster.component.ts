import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-shyster',
  templateUrl: './shyster.component.html',
  styleUrls: ['./shyster.component.scss']
})
export class ShysterComponent extends MatCardModule {

  name = "Cpt Johnny Walker";
  profilePicture = "https://material.angular.io/assets/img/examples/shiba1.jpg";
  currentGame = "Halo MCC";
  status = "yeet";
  role = "CEO";

  constructor() {
    super();
  }

}
