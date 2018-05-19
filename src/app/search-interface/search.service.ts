import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from '../shared/post.model';

@Injectable()
export class SearchService {

    postsCol: AngularFirestoreCollection<Post>;
    posts: Observable<Post[]>;

    constructor (private firebase: AngularFirestore) {
    }

    searchPosts(query) {
        this.postsCol = this.firebase.collection('Posts', ref => ref
            .where('title', '>', query)
        );
        this.posts = this.postsCol.snapshotChanges().map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Post;
                data.ID = a.payload.doc.id;
                return data;
            });
        });
    }

    getPosts() {
        return this.posts;
    }
}
