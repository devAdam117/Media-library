import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Inject, Input , EventEmitter, Output} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms'
import { MediaItemListComponent } from '../media-item-list/media-item-list.component';
import { MediaItemService } from '../media-item-service';



@Component({
  selector: 'app-media-item-form',
  providers:[MediaItemListComponent],
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit  {
  form;  
  @Input() mediaItem;
  formDis:boolean=false;
  displayForm(){
    this.formDis=! this.formDis;    
  }
  
  @Output() myEvent = new EventEmitter();
  public onSubmit (mediaItem) {   
    //this.mediaItemService.add(mediaItem);    
    //this.mediaArray=this.mediaItemService.get();
    this.onSub.refreshPage(mediaItem);    
   // this.onSub.searchName();   
  }
  constructor(private formBuilder: FormBuilder, private mediaItemService : MediaItemService , @Inject ('lookUpListToken') 
  public lookUpList,private onSub:MediaItemListComponent) { }

  ngOnInit() {
    this.form=this.formBuilder.group({
      name: this.formBuilder.control('',Validators.compose([Validators.required])),
      medium: this.formBuilder.control('', Validators.required),
      type: this.formBuilder.control('',Validators.required),
      lengthOfEP: this.formBuilder.control('',Validators.required),      
      numberOfEp: this.formBuilder.control('',Validators.required),
      whenWatched: this.formBuilder.control('',Validators.required), 
      star :  false,

    });
      
    
  }
  

}
