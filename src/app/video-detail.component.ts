import { Component, OnInit }      from '@angular/core';
import { Location } from '@angular/common';

import { Video } from './video';
import { VideoService } from './video.service';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit{
  
  video: Video;

  constructor(
    private videoService: VideoService,
    private location: Location,
  ) { }


  ngOnInit(): void {
    this.video = this.videoService.selectedVideo
  }

  goBack(): void {
    this.location.back();
  }
}
