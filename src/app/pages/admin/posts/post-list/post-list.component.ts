import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var CRUMINA:any; //  init_plugins();

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    CRUMINA.init_plugins();
    CRUMINA.init_lib_plugins();
  }

  goToPage () {
    this.router.navigate ( ['../crear'], { relativeTo:  this.route } );

  }

}
