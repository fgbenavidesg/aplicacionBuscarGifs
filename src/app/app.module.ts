import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GiftsModule } from './gifts/gifts.module';

import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    SharedModule,
    GiftsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
