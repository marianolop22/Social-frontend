import { Component, OnInit } from '@angular/core';


declare var CRUMINA:any; //  init_plugins();

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    CRUMINA.init_plugins();
    CRUMINA.init_lib_plugins();

  }




}
