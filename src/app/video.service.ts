import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Video } from './video';


@Injectable()
export class VideoService {

  private headers = new Headers({'Content-Type': 'application/json'});

  selectedVideo: Video = null;
  videoResults: Video[] = [];

  constructor(private http: Http) { }

  


  getVideos(gameName: string, numResults: number, searchPeriod: string,
    includeArchive: boolean, includeHighlight: boolean, includeUpload: boolean, sortBy: string
  ): Promise<Video[]> {
    var url = "https://api.twitch.tv/kraken/videos/top";
    url += this.buildQueryParams(gameName,numResults,searchPeriod,includeArchive,includeHighlight,includeUpload, sortBy);

    return this.http.get(url).toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  private buildQueryParams(gameName: string, numResults: number, searchPeriod: string,
    includeArchive: boolean, includeHighlight: boolean, includeUpload: boolean, sortBy: string
  ): string {
    var queryParameters = "?client_id=w5txc5fxqonq4560d704tkemi6wese";

    gameName = gameName.trim();
    if (gameName != "") {
      queryParameters += "&game=" + gameName;
    }
    if (numResults > 0 && numResults <= 100) {
      queryParameters += "&limit=" + numResults;
    }

    queryParameters += "&period=" + searchPeriod;

    var includedBroadcastTypes = "";
    if (includeArchive) {
      includedBroadcastTypes = "archive";
    }
    if (includeHighlight) {
      includedBroadcastTypes += (includedBroadcastTypes == "") ? "highlight" : ",highlight";
    }
    if (includeUpload) {
      includedBroadcastTypes += (includedBroadcastTypes == "") ? "upload" : ",upload";
    }
    if (includedBroadcastTypes != "") {
      queryParameters += "&broadcast_type=" + includedBroadcastTypes
    }
    if (sortBy !== "")
    {
      queryParameters += "&sort=" + sortBy;
    }

    return queryParameters;
  }

  private handleSuccess(response: any): Video[] {    
    var videosArray = response.json().videos;
    return videosArray;
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}

