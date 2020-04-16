import { Component, OnInit, Input } from '@angular/core';

import { Image } from "src/app/models/image.model";

@Component({
  selector: 'app-post-video',
  templateUrl: './post-video.component.html',
  styleUrls: ['./post-video.component.css']
})
export class PostVideoComponent implements OnInit {

  @Input() video: Image;

  constructor() { }

  ngOnInit(): void {

    console.log ( this.video );
  }

}
