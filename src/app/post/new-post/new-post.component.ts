import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../../shared/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {


  createPostForm: FormGroup;
  posts: Post[];

  postTitle: string;
  postContent: string;
  postVideo: string;
  postImage: string;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.postService.addPost(this.createPostForm.value);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  private initForm() {

    this.postImage = '';
    this.postVideo = '';

    this.createPostForm = new FormGroup({
      'title': new FormControl(this.postTitle, Validators.required),
      'content': new FormControl(this.postContent, Validators.required),
      'image': new FormControl(this.postImage),
      'video': new FormControl(this.postVideo,
        Validators.pattern('^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+'))
    });
  }
}
