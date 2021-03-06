import { HttpClient } from '@angular/common/http';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

export class MediaItemService {
  constructor(){

  }
    
    get() {
      if(!JSON.parse(localStorage.getItem("medias"))){
        let empyArr=[];
        localStorage.setItem("medias", JSON.stringify(empyArr));       
      }
        return this.mediaItems=JSON.parse(localStorage.getItem("medias")) ;
    }
    add(mediaItem) {
      
      if(!JSON.parse(localStorage.getItem("medias"))){
        let empyArr=[];
        localStorage.setItem("medias", JSON.stringify(empyArr));       
      }
      else {
      let mediaArray = JSON.parse(localStorage.getItem("medias"));     
      mediaItem.id=mediaArray.length+1;
      mediaArray.push(mediaItem);      
      localStorage.setItem("medias", JSON.stringify(mediaArray));
      }
        
    }
    delete (mediaItem) {
                
        let mediaArray = JSON.parse(localStorage.getItem("medias"));
       // mediaArray = mediaArray.filter(x => x.id !== mediaItem.id)       
        
       let index = mediaArray.map(o => o.name).indexOf(mediaItem.name)
        console.log(index);
       index>=0 ?  mediaArray.splice(index,1): 0;

       // vratim spat
       localStorage.setItem("medias", JSON.stringify(mediaArray));
       

    }
    deleteLocal () {
      
    }
    mediaItems = [{
        id:1,
        medium:"series",
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
        medium:"series",
        type:"Action",
        lengthOfEpisode:`45m`,
        wasWatched:"Was watched",
        episodes: "10e/5s",
        wasWatchedOn: "10/11/2015"
      },
      {
        id:3,
        name:`Breaking Bad`,
        medium:"series",
        type:"Thriller",
        lengthOfEpisode:`55m`,
        wasWatched:"Was watched",
        episodes: "20e/6s",
        wasWatchedOn: "10/8/2017"
      },
      {
        id:4,
        name:`Walking Dead`,
        medium:"series",
        type:"Action",
        lengthOfEpisode:`40m`,
        wasWatched:"Was watched",
        episodes: "15e/9s",
        wasWatchedOn: "10/11/2015"
      },
      {
        id:5,
        name:`72 hodin`,
        medium:"movie",
        type:"Anime",
        lengthOfEpisode:`20m`,
        wasWatched:"Was watched",
        episodes: "225",
        wasWatchedOn: "3/3/2020"
      },
      {
        id:6,
        name:`How I met your mother`,
        medium:"series",
        type:"Comedy",
        lengthOfEpisode:`30m`,
        wasWatched:"Was watched",
        episodes: "30e/15s",
        wasWatchedOn: "7/2/2019"
      }]



}