import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';


import { VideoService } from './video.service';
import { VideoDetailComponent } from './video-detail.component';
import { VideoResultComponent } from './video-result.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    VideoDetailComponent,
    VideoResultComponent,
  ],
  providers: [ VideoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
