import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private homeService: HomeService,
    private router: Router) { }

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

  retrieveID(url) {
    let urlParts = url.split('/');
    let id = urlParts[urlParts.length - 1];
    return id;
  }

  readMore(id) {
    this.router.navigate(['post/', id]);
  }

}
