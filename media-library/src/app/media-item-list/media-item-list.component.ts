import { Component, OnChanges, OnInit, Output, SimpleChange  } from '@angular/core';
import { MediaItemFormComponent } from '../media-item-form/media-item-form.component';
import { MediaItemService } from '../media-item-service';


@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaArray= [];
  constructor(private mediaItemService : MediaItemService) {}
  inputVal:string="";
  sortedItems=[];    
  public searchName(){
    this.mediaArray=this.mediaItemService.get();
    if(!this.inputVal)  { 
      return  this.sortedItems=this.mediaArray; 
    }
    else if(this.inputVal) {
       this.sortedItems=this.mediaArray.filter(res=>{      
        return res.name.toLocaleLowerCase().includes(this.inputVal.toLocaleLowerCase()) ;
         
   })}
  }  
  refreshPage (mediaItem) {    
    this.mediaItemService.add(mediaItem); 
    this.sortedItems=this.mediaItemService.get();      
    window.location.reload();     
    
  }

   ngOnInit(): void {      
    this.sortedItems=this.mediaItemService.get();      
  }
 
  onMediaItemDelete(mediaItem){   
    this.mediaItemService.delete(mediaItem);
    this.mediaArray=this.mediaItemService.get();
    this.sortedItems=this.mediaArray.filter(res=>{      
      return res.name.toLocaleLowerCase().includes(this.inputVal.toLocaleLowerCase()) ;       
 })
 
    }
  
    
  

}
