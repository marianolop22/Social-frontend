import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {

  @Input() author: string;
  @Input() published: string;
  @Input() avatar: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
