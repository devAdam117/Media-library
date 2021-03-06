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

  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      name: new FormControl('',Validators.required),
      medium: new FormControl('', Validators.required),
      lengthOfEP: new FormControl(''),      
      numberOfEp: new FormControl(''),
      whenWatched: new FormControl(''),

    });
  }

}
