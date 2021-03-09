import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { MediaItemService } from '../media-item-service'

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input() mediaItem;
  name:string;
  mediaArray;
  @Output() delete = new EventEmitter();
  constructor(private mediaItemService :MediaItemService) { }
  searchName(){
   
    
    };

  ngOnInit(): void {
    
  }
  onDelete() { 
 this.delete.emit(this.mediaItem);
 
  }

  isRated:boolean=false;
  ratingFunc(){    
    
    //this.isRated=!this.isRated; 
    this.mediaArray=this.mediaItemService.get();    
    localStorage.clear();
    let index = this.mediaArray.map(o => o.name).indexOf(this.mediaItem.name)
    if(this.mediaArray[index].star){
      this.mediaArray[index].star=false;  
    this.mediaItem.star=false;     
    } 
    else {
      this.mediaArray[index].star=true;
      this.mediaItem.star=true;   
        }      
        
        localStorage.setItem("medias", JSON.stringify(this.mediaArray));
        
    

    
    
   
    
  }
  

}
