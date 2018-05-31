import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostComponent } from './post.component';
import { DisplayPostComponent } from './display-post/display-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';

import { PostRoutingModule } from './post-routing.module';
import { PostService } from './post.service';
import { DisplayAllPostsComponent } from './display-all-posts/display-all-posts.component';

@NgModule({
    declarations: [
        PostComponent,
        DisplayPostComponent,
        EditPostComponent,
        NewPostComponent,
        DisplayAllPostsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PostRoutingModule
    ],
    providers: [PostService]
})

export class PostModule {}
