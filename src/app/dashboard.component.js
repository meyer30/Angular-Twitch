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
var router_1 = require("@angular/router");
var video_service_1 = require("./video.service");
var DashboardComponent = (function () {
    function DashboardComponent(videoService, router) {
        this.videoService = videoService;
        this.router = router;
        this.resultVideos = [];
        this.noSearchResultsFound = false;
        this.searchPeriod = "week";
        this.includeArchive = true;
        this.includeHighlight = true;
        this.includeUpload = true;
        this.sortBy = "views";
        this.isSearchDone = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.resultVideos = this.videoService.videoResults;
        this.isSearchDone = (this.resultVideos.length > 0);
    };
    DashboardComponent.prototype.search = function (gameName, numResults) {
        var _this = this;
        this.videoService.getVideos(gameName, numResults, this.searchPeriod, this.includeArchive, this.includeHighlight, this.includeUpload, this.sortBy)
            .then(function (videos) {
            _this.isSearchDone = true;
            _this.resultVideos = videos;
        });
    };
    DashboardComponent.prototype.onSelect = function (video) {
        this.videoService.selectedVideo = video;
        this.videoService.videoResults = this.resultVideos;
        this.router.navigate(['/video-detail']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [video_service_1.VideoService,
        router_1.Router])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map