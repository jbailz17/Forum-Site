const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const algoliasearch = require('algoliasearch');
const algolia = algoliasearch('LEGVGPVGUA', 'f5a288afbd282356eac39da76f56c3fd');

exports.onPostCreated = functions.firestore.document('Posts/{postId}').onCreate((snap, context) => {
    const post = snap.data();

    post.objectID = context.params.postId;

    const index = client.initIndex('forum_site');
    return index.saveObject(note);
});

// exports.addFirestoreDataToAlgolia = functions.https.onRequest((req, res) => {
//     const records = [];

//     admin.firestore().collection('Posts').get().then((snapshot) => {
//         snapshot.forEach((doc) => {
//             const childKey = doc.id;
//             const childData = doc.data();

//             childData.objectID = childKey;

//             records.push(childData);
//             console.log(doc.id, '=>', doc.data());
//         });

//         return index.saveObject(records, (err, content) => {
//             if (err) throw err;
//             console.log('Algolia updated');
//         });

//         // return index.saveObjects(records).then(() => {
//         //     console.log('Documents imported into Algolia');
//         //     process.exit(0);
//         //     return records;
//         // }).catch(error => {
//         //     console.log('Error when importing documents into Algolia', error);
//         //     process.exit(1);
//         // });

//     }).catch(error => {
//         console.error('Error getting documents', error);
//     }); 