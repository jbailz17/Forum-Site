import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../../shared/post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  id: string;
  editPostForm: FormGroup;
  posts: Post[];

  postTitle: string;
  postContent: string;
  postVideo: string;
  postImage: string;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
    this.postService.getPost(this.id).subscribe(posts => {
      this.posts = posts;
      this.rebuildForm();
    });
    this.initForm();
  }

  onSubmit() {
    this.postService.updatePost(this.id, this.editPostForm.value);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['post/', this.id]);
  }

  private initForm() {

    this.editPostForm = new FormGroup({
      'title': new FormControl(this.postTitle),
      'content': new FormControl(this.postContent),
      'image': new FormControl(this.postImage),
      'video': new FormControl(this.postVideo,
        Validators.pattern('^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+'))
    });
  }

  private rebuildForm() {
    this.posts.map(post => {
      this.postTitle = post.title;
      this.postContent = post.content;
      this.postVideo = post.video;
      this.postImage = post.image;
    });

    this.editPostForm.reset({
      'title': this.postTitle,
      'content': this.postContent,
      'image': this.postImage,
      'video': this.postVideo
    });
  }
}
