"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var VideoService = (function () {
    function VideoService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.selectedVideo = null;
        this.videoResults = [];
    }
    VideoService.prototype.getVideos = function (gameName, numResults, searchPeriod, includeArchive, includeHighlight, includeUpload, sortBy) {
        var url = "https://api.twitch.tv/kraken/videos/top";
        url += this.buildQueryParams(gameName, numResults, searchPeriod, includeArchive, includeHighlight, includeUpload, sortBy);
        return this.http.get(url).toPromise()
            .then(this.handleSuccess)
            .catch(this.handleError);
    };
    VideoService.prototype.buildQueryParams = function (gameName, numResults, searchPeriod, includeArchive, includeHighlight, includeUpload, sortBy) {
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
            queryParameters += "&broadcast_type=" + includedBroadcastTypes;
        }
        if (sortBy !== "") {
            queryParameters += "&sort=" + sortBy;
        }
        return queryParameters;
    };
    VideoService.prototype.handleSuccess = function (response) {
        var videosArray = response.json().videos;
        return videosArray;
    };
    VideoService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return VideoService;
}());
VideoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map