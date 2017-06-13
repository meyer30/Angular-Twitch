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
var common_1 = require("@angular/common");
var video_service_1 = require("./video.service");
var VideoDetailComponent = (function () {
    function VideoDetailComponent(videoService, location) {
        this.videoService = videoService;
        this.location = location;
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
        this.video = this.videoService.selectedVideo;
    };
    VideoDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return VideoDetailComponent;
}());
VideoDetailComponent = __decorate([
    core_1.Component({
        selector: 'video-detail',
        templateUrl: './video-detail.component.html',
        styleUrls: ['./video-detail.component.css']
    }),
    __metadata("design:paramtypes", [video_service_1.VideoService,
        common_1.Location])
], VideoDetailComponent);
exports.VideoDetailComponent = VideoDetailComponent;
//# sourceMappingURL=video-detail.component.js.map