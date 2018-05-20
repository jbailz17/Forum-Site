import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post.component';
import { DisplayPostComponent } from './display-post/display-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';

import { PostRoutingModule } from './post-routing.module';

@NgModule({
    declarations: [
        PostComponent,
        DisplayPostComponent,
        EditPostComponent,
        NewPostComponent
    ],
    imports: [
        CommonModule,
        PostRoutingModule
    ]
})

export class PostModule {}
