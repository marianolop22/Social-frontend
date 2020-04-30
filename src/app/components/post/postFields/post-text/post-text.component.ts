import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-text',
  templateUrl: './post-text.component.html',
  styleUrls: ['./post-text.component.css']
})
export class PostTextComponent implements OnInit {

  @Input() text: string;
  @Input() tittle: string = null;

  constructor() { }

  ngOnInit(): void {
  }

}
