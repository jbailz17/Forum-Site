import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';
import { Post } from '../../shared/post.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  posts: Post[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

}
