import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './post/new-post/new-post.component';
import { DisplayPostComponent } from './post/display-post/display-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { SearchInterfaceComponent } from './search-interface/search-interface.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'admin', component: SearchInterfaceComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
