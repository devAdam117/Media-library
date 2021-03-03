import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstFEapp';
  mediaItems = {
    id:1,
    name:`Naruto`,
    type:"Anime",
    lengthOfEpisode:`20m`,
    wasWatched:"Was watched",
    episodes: "750",
    wasWatchedOn: "10/11/1999"
  }
  onMediaIteamDelete(e){
    console.log(e);
  }
}
