import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';
import { Post } from '../../shared/post.model';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  posts: Post[];
  users: User[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getPosts().subscribe(posts => {
      console.log(posts);
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

}
