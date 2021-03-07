import { Component, OnChanges, OnInit, Output, SimpleChange  } from '@angular/core';
import { MediaItemFormComponent } from '../media-item-form/media-item-form.component';
import { MediaItemService } from '../media-item-service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
mediaItems= [];
  constructor(private mediaItemService : MediaItemService) { }
  name:string="";
  sortedItems;  
  public searchName(){   
    
    if(!this.name)  {
      return this.sortedItems=this.mediaItems;
    }
    else {
       this.sortedItems=this.mediaItems.filter(res=>{      
        return res.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase());
        
   })}
    

  }
  public ngOnInit(): void {    
    this.mediaItems=this.mediaItemService.get();     
      this.sortedItems=this.mediaItems;
  }
 
  onMediaItemDelete(mediaItem){
    this.mediaItemService.delete(mediaItem);
    this.sortedItems=this.mediaItems;

    }
  
    
  

}
