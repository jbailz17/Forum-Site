import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FeaturePostComponent } from './feature-post/feature-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';

@NgModule({
    declarations: [
        HomeComponent,
        FeaturePostComponent,
        ListPostsComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HomeModule {}
