import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete() {
 console.log("delete");
 this.delete.emit(this.mediaItem);
  }
  

}
