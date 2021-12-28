import { Component, NgZone, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var gapi: any;

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss']
})

export class VideosPageComponent implements OnInit {
  videoIds : Array<String> = [];

  constructor(private ngZone: NgZone) {
  }

  ngOnInit(): void { 
    gapi.load("client:auth2", () => {
      gapi.auth2.init({client_id: environment.GAPI_CLIENT_ID});
      this.authenticate().then(this.loadClient).then(this.execute).then((ret : Array<String>) => {
        this.ngZone.run(() => {this.videoIds = ret;});
      })
    });
  }

  authenticate() {
    return gapi.auth2.getAuthInstance();
  }

  loadClient() {
    gapi.client.setApiKey(environment.GAPI_KEY);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(() => { console.log("GAPI client loaded for API"); },
      (err : Error) => { console.error("Error loading GAPI client for API", err); });
  }

  execute() {
    return gapi.client.youtube.channels.list({"part": ["contentDetails"], "id": "UCS5njOSqHIb0y_tVBDfaU3Q"})
      .then((response : any) => {
        return gapi.client.youtube.playlistItems.list({
                  "part": ["contentDetails"],
                  "maxResults": 30,
                  "playlistId": response.result.items[0].contentDetails.relatedPlaylists["uploads"]
                })
                .then((response : any) => {
                  return response.result.items.map((x: any) => {
                    return x.contentDetails.videoId.toString();
                  });
                },
                (err : Error) => { console.error("Failed to get upload playlist elements", err); });
                },
                (err : Error) => { console.error("Failed to get upload playlist id", err); });
  }

}
