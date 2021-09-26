import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var gapi: any;

function authenticate() {
  return gapi.auth2.getAuthInstance()
}
function loadClient() {
  gapi.client.setApiKey(environment.GAPI_KEY);
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
  .then(function() { console.log("GAPI client loaded for API"); },
    function(err : Error) { console.error("Error loading GAPI client for API", err); });
}
@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss']
})
export class VideosPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
