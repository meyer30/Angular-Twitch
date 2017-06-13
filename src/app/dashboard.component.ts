import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { VideoService } from './video.service';
import { Video } from './video';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  
  resultVideos: Video[] = [];
  noSearchResultsFound = false;

  searchPeriod = "week";
  includeArchive = true;
  includeHighlight = true;
  includeUpload = true;
  sortBy = "views";
  isSearchDone = false;

  constructor(private videoService: VideoService,
    private router: Router) { }

  ngOnInit(): void {
    this.resultVideos = this.videoService.videoResults;
    this.isSearchDone = (this.resultVideos.length > 0);
  }

  
  search(gameName: string, numResults: number): void {
    this.videoService.getVideos(gameName, numResults,
      this.searchPeriod, this.includeArchive,
      this.includeHighlight, this.includeUpload, this.sortBy)
      .then(videos => {
        this.isSearchDone = true;
        this.resultVideos = videos;
      });
  }
  
  onSelect(video: Video): void {
    this.videoService.selectedVideo = video;
    this.videoService.videoResults = this.resultVideos;
    this.router.navigate(['/video-detail']);
  }
}
