import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../media-item-service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  constructor(private mediaItemService : MediaItemService) { }
  mediaItems = [];
  ngOnInit(): void {
    this.mediaItems=this.mediaItemService.get()
  }
 
  onMediaItemDelete(mediaItem){
    this.mediaItemService.delete(mediaItem);

  }

}
