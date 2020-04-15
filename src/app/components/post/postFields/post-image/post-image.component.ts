import { Component, OnInit, Input } from '@angular/core';

import { Image } from "src/app/models/image.model";

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnInit {

  @Input() image: Image;

  constructor() { }

  ngOnInit(): void {
  }

}
