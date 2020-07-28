import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

import { Post } from "src/app/models/post.model";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  public getPostList () : Observable<any> {
  
    return this.http.get ( 'assets/json/postList.json');

  }

  public getTemplateList (): Observable<any> {
    return this.http.get  ( 'assets/json/templateList.json');
  }
  public getDistributionGroupList (): Observable<any> {
    return this.http.get  ( 'assets/json/distributionGroupList.json');
  }
}
