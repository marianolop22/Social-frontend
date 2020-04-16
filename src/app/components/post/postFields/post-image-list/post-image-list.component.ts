import { Component, OnInit, Input } from '@angular/core';

import { Image } from "src/app/models/image.model";

@Component({
  selector: 'app-post-image-list',
  templateUrl: './post-image-list.component.html',
  styleUrls: ['./post-image-list.component.css']
})
export class PostImageListComponent implements OnInit {

  @Input() imageList: Array<Image>;

  constructor() { }

  ngOnInit(): void {






    
  }

}
