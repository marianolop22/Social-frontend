import { Component, OnInit } from '@angular/core';

import { NewsService } from "src/app/services/news.service";
import { Post } from "src/app/models/post.model";



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
        console.log ( this.postList );
      },
      reject => {
        console.log (reject );
      }
    );

  }

  ngOnInit(): void {



  }





}
