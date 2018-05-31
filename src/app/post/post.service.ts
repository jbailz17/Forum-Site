import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase1 from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from '../shared/post.model';
import { User } from '../shared/user.model';

@Injectable()
export class PostService {

    postsCol: AngularFirestoreCollection<Post>;
    posts: Observable<Post[]>;

    usersCol: AngularFirestoreCollection<User>;
    users: Observable<User[]>;

    constructor (private firebase: AngularFirestore) {
    }

    getPosts() {
        this.postsCol = this.firebase.collection('Posts', ref => ref
            .orderBy('date', 'desc')
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

    getPost(postID) {
        this.postsCol = this.firebase.collection('Posts', ref => ref
            .where('ID', '==', postID)
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

    updatePost(id, values) {
        this.firebase.collection('Posts').doc(id).update({
            title: values.title,
            content: values.content,
            image: values.image,
            video: values.video
        }).then(function() {
            console.log('Successfully updated post!');
        }).catch(function(error) {
            console.log('An error occurred: ', error);
        });
    }

    addPost(values) {
        let newPostRef = firebase1.firestore().collection('Posts').doc();
        let id = '';
        newPostRef.set({
            ID: newPostRef.id,
            title: values.title,
            content: values.content,
            image: values.image,
            video: values.video,
            likes: 0,
            userID: 1,
            date: firebase1.firestore.FieldValue.serverTimestamp()
        }).then(function() {
            console.log('Successfully Created Post!');
        }).catch(function(error) {
            console.error('An error occurred: ', error);
        });
    }

    deletePost(id) {
        this.firebase.collection('Posts').doc(id).delete().then(function() {
            console.log('Successfully deleted post.');
        }).catch(function(error) {
            console.error('Error removing post: ', error);
        });
    }
}
