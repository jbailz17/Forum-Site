import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';
import { Post } from '../../shared/post.model';

@Component({
  selector: 'app-feature-post',
  templateUrl: './feature-post.component.html',
  styleUrls: ['./feature-post.component.css']
})
export class FeaturePostComponent implements OnInit {

  posts: Post[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getFeaturePost().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

}
