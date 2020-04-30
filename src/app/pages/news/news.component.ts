import { Component, OnInit } from '@angular/core';

import { NewsService } from "src/app/services/news.service";
import { Post } from "src/app/models/post.model";

declare var CRUMINA:any; //  init_plugins();

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public postList: Array<Post>;
  public post: Post;


  constructor(
    private _news: NewsService
  ) {

    this._news.getPostList ().subscribe (
      response => {
        this.postList = response;
      },
      reject => {
        console.log (reject );
      }
    );

  }

  ngOnInit(): void {
    // init_plugins();
    // init_lib_plugins();

    CRUMINA.init_plugins();
    CRUMINA.init_lib_plugins();

  }





}
