import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from '../home.service';
import { Post } from '../../shared/post.model';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-feature-post',
  templateUrl: './feature-post.component.html',
  styleUrls: ['./feature-post.component.css']
})
export class FeaturePostComponent implements OnInit {

  posts: Post[];
  users: User[];

  constructor(private homeService: HomeService,
    private router: Router) { }

  ngOnInit() {
    this.homeService.getFeaturePost().subscribe(posts => {
      this.posts = posts;
    });
    this.homeService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getUsername(userID) {
    let username = '';
    if (this.users !== undefined) {
      this.users.map(user => {
        if (user.ID === userID) {
          username = user.firstName;
        }
      });
    }
    return username;
  }

  readMore(id) {
    this.router.navigate(['post/', id]);
  }

}
