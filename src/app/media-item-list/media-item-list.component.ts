import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mediaItems = [{
    id:1,
    name:`Naruto`,
    type:"Anime",
    lengthOfEpisode:`20m`,
    wasWatched:"Was watched",
    episodes: "750",
    wasWatchedOn: "10/11/1999"
  },
  {
    id:2,
    name:`Vikings`,
    type:"Action",
    lengthOfEpisode:`45m`,
    wasWatched:"Was watched",
    episodes: "10e/5s",
    wasWatchedOn: "10/11/2015"
  },
  {
    id:3,
    name:`Breaking Bad`,
    type:"Thriller",
    lengthOfEpisode:`55m`,
    wasWatched:"Was watched",
    episodes: "20e/6s",
    wasWatchedOn: "10/8/2017"
  },
  {
    id:4,
    name:`Walking Dead`,
    type:"Action",
    lengthOfEpisode:`40m`,
    wasWatched:"Was watched",
    episodes: "15e/9s",
    wasWatchedOn: "10/11/2015"
  },
  {
    id:5,
    name:`Boruto`,
    type:"Anime",
    lengthOfEpisode:`20m`,
    wasWatched:"Was watched",
    episodes: "225",
    wasWatchedOn: "3/3/2020"
  },
  {
    id:6,
    name:`How I met your mother`,
    type:"Comedy",
    lengthOfEpisode:`30m`,
    wasWatched:"Was watched",
    episodes: "30e/15s",
    wasWatchedOn: "7/2/2019"
  }]
  onMediaItemDelete(e){
    
  }

}
