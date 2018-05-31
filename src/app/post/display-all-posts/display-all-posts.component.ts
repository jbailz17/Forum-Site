import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../../shared/post.model';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-display-all-posts',
  templateUrl: './display-all-posts.component.html',
  styleUrls: ['./display-all-posts.component.css']
})
export class DisplayAllPostsComponent implements OnInit {

  posts: Post[];
  users: User[];

  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
    this.postService.getUsers().subscribe(users => {
      this.users = users;
    })
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
