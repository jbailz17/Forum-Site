import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FeaturePostComponent } from './feature-post/feature-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { HomeService } from './home.service';

@NgModule({
    declarations: [
        HomeComponent,
        FeaturePostComponent,
        ListPostsComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [HomeService]
})

export class HomeModule {}
