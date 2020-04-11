import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() style: number;
  @Input() author: string;
  @Input() text: string;
  @Input() published: string;


  constructor() { }

  ngOnInit(): void {
  }

}
