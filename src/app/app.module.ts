import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
//Import HttpClientModule from @angular/common/http
import {HttpClientModule, HttpXhrBackend} from '@angular/common/http';




import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { TitleComponent } from './title/title.component';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import {MediaItemService} from './media-item-service';

const lookUpList = {
  mediums: ['Movies','Series']
};

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    TitleComponent,
    MediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [
    MediaItemService,
    {provide: 'lookUpListToken', useValue: lookUpList}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
