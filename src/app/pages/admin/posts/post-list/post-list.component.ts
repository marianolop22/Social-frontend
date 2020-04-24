import { Component, OnInit } from '@angular/core';

declare function init_plugins();
declare function init_lib_plugins();

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    init_plugins();
    init_lib_plugins();

  }

}
