import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { DisplayPostComponent } from './display-post/display-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DisplayAllPostsComponent } from './display-all-posts/display-all-posts.component';

const postRoutes: Routes = [
    { path: 'post', component: PostComponent, children: [
        { path: '', component: DisplayAllPostsComponent},
        { path: 'new', component: NewPostComponent },
        { path: ':id', component: DisplayPostComponent },
        { path: ':id/edit', component: EditPostComponent }
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(postRoutes)
    ],
    exports: [RouterModule]
})

export class PostRoutingModule {}
