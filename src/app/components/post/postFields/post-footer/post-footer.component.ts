import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.css']
})
export class PostFooterComponent implements OnInit {

  @Input() likes: number;
  @Input() comments: number;
  @Input() shared: number;


  constructor() { }

  ngOnInit(): void {
  }

}
