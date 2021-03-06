import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms'
import { MediaItemService } from '../media-item-service';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form;

  
  onSubmit (mediaItem) {
    //toto je ako keby sme si obrali klasu z ineho komponentu
    // bereme sevice vlastne..
    this.mediaItemService.add(mediaItem);
  }
  /*filled1=false;
  filled2=false;
  filled3=false;
  filled4=false;
  modelChange1(e){
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


  constructor(private formBuilder: FormBuilder, private mediaItemService : MediaItemService) { }

  ngOnInit() {
    this.form=this.formBuilder.group({
      name: this.formBuilder.control('',Validators.required),
      medium: this.formBuilder.control('', Validators.required),
      type: this.formBuilder.control('',Validators.required),
      lengthOfEP: this.formBuilder.control('',Validators.required),      
      numberOfEp: this.formBuilder.control('',Validators.required),
      whenWatched: this.formBuilder.control('',Validators.required),
      

    });
  }
  

}
