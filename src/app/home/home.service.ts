import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from '../shared/post.model';
import { User } from '../shared/user.model';

@Injectable()
export class HomeService {

    postsCol: AngularFirestoreCollection<Post>;
    posts: Observable<Post[]>;

    usersCol: AngularFirestoreCollection<User>;
    users: Observable<User[]>;

    constructor (private firebase: AngularFirestore) {
    }

    getPosts() {
        this.postsCol = this.firebase.collection('Posts', ref => ref
            .orderBy('date', 'desc')
            .limit(5)
        );
        this.posts = this.postsCol.snapshotChanges().map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Post;
                data.ID = a.payload.doc.id;
                return data;
            });
        });
        return this.posts;
    }

    getFeaturePost() {
        this.postsCol = this.firebase.collection('Posts', ref => ref
            .orderBy('likes', 'desc')
            .limit(1)
        );
        this.posts = this.postsCol.snapshotChanges().map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Post;
                data.ID = a.payload.doc.id;
                return data;
            });
        });
        return this.posts;
    }

    getUsers() {
        this.usersCol = this.firebase.collection('Users');
        this.users = this.usersCol.snapshotChanges().map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as User;
                data.ID = a.payload.doc.id;
                return data;
            });
        });
        return this.users;
    }
}
