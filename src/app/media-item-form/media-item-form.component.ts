import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form;
  
  onSubmit (mediaItem) {
    console.log(mediaItem);
  }
  filled1=false;
  filled2=false;
  filled3=false;
  filled4=false;
  /*modelChange1(e){
    e ? this.filled1=true : this.filled1=false;     
  }
  modelChange2(e){
    e ? this.filled2=true : this.filled2=false;     
  }
  modelChange3(e){
    e ? this.filled3=true : this.filled3=false;     
  }
  modelChange4(e){
    e ? this.filled4=true : this.filled4=false;     
  }*/
  //supacky sposob, skoda :-/ Haha tak nie :D kaso zacranil


  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      name: new FormControl('',Validators.required),
      medium: new FormControl('', Validators.required),
      lengthOfEP: new FormControl('',Validators.required),      
      numberOfEp: new FormControl('',Validators.required),
      whenWatched: new FormControl('',Validators.required),

    });
  }
  

}
