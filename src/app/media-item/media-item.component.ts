import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input() mediaItem;
  name:string;
  @Output() delete = new EventEmitter();
  constructor() { }
  searchName(){
   
    
    };

  ngOnInit(): void {
    //console.log(this.mediaItem);
  }
  onDelete() {
 //console.log("delete");
 this.delete.emit(this.mediaItem);
  }

  isRated= false;
  ratingFunc(){
    this.isRated=!this.isRated;
    
  }
  

}
