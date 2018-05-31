const functions = require('firebase-functions');
const admin = require("firebase-admin");

admin.initializeApp();

const firestore = admin.firestore();

const algoliasearch = require('algoliasearch');
const algolia = algoliasearch('LEGVGPVGUA', 'f5a288afbd282356eac39da76f56c3fd');


exports.onPostCreated = functions.firestore.document('Posts/{postId}').onCreate((snap, context) => {
    const post = snap.data();

    post.objectID = context.params.postId;

    const index = algolia.initIndex('forum_site');
    return index.saveObject(post);
});

exports.onPostUpdated = functions.firestore.document('Posts/{postId}').onUpdate((change, context) => {
    const post = change.after.data();

    post.objectID = context.params.postId;

    const index = algolia.initIndex('forum_site');
    return index.saveObject(post);
});

exports.onPostDeleted = functions.firestore.document('Posts/{postId}').onDelete((snap, context) => {
    const post = snap.data();

    post.objectID = context.params.postId;

    const index = algolia.initIndex('forum_site');
    return index.deleteObject(post.objectID);
});

