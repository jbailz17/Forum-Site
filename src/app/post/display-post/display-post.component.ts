import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { PostService } from '../post.service';
import { Post } from '../../shared/post.model';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.css']
})
export class DisplayPostComponent implements OnInit {

  id: string;
  posts: Post[];
  users: User[];
  noValue: boolean = false;

  constructor(private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );

    this.postService.getPost(this.id).subscribe(posts => {
      this.posts = posts;
      if (this.posts.length < 1) {
        this.noValue = true;
      } else {
        this.noValue = false;
      }
    });
    this.postService.getUsers().subscribe(users => {
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

  retrieveEmbedUrl(url) {
    let embedUrl = 'https://www.youtube.com/embed/';
    let urlParts = url.split('/');
    let id = urlParts[urlParts.length - 1];
    embedUrl += id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  edit() {
    this.router.navigate(['./edit'], {relativeTo: this.route});
  }

  deletePost() {
    let confirmed = false;
    confirmed = confirm('Are you sure you would like to delete this post?');
    if (confirmed) {
      this.postService.deletePost(this.id);
      this.router.navigate(['/post']);
    }
  }

}
