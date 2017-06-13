import { Component, Input} from '@angular/core';
import { Video } from './video';

@Component({
  selector: 'video-result',
  templateUrl: './video-result.component.html',
})

export class VideoResultComponent  {
  @Input() video: Video;
}
