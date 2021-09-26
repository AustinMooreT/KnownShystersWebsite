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
function execute() {
  return gapi.client.youtube.channels.list({"part": ["contentDetails"], "id": "UCS5njOSqHIb0y_tVBDfaU3Q"})
    .then(function(response : any) {
      return gapi.client.youtube.playlistItems.list({"part": ["contentDetails"],
                  "maxResults": 30,
                  "playlistId": response.result.items[0].contentDetails.relatedPlaylists["uploads"]
                })
                  .then(function(response : any) {
                    return response.result.items.map(function(x: any){return x.contentDetails.videoId});
                  },
                  function(err : Error) { console.error("Failed to get upload playlist elements", err); });
              },
              function(err : Error) { console.error("Failed to get upload playlist id", err); });
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
