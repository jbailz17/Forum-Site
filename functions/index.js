const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const algoliasearch = require('algoliasearch');
const algolia = algoliasearch('LEGVGPVGUA', 'f5a288afbd282356eac39da76f56c3fd');

const index = algolia.initIndex('forum_site');

exports.addFirestoreDataToAlgolia = functions.https.onRequest((req, res) => {
    const records = [];

    admin.firestore().collection('Posts').get().then((sanpshot) => {
        snapshot.forEach((doc) => {
            const childKey = doc.id;
            const childData = doc.data();

            childData.objectID = childKey;

            records.push(childData);
            console.log(doc.id, '=>', doc.data());
        });

        index.saveObjects(records).then(() => {
            console.log('Documents imported into Algolia');
            process.exit(0);
            return records;
        }).catch(error => {
            console.log('Error when importing documents into Algolia', error);
            process.exit(1);
        });

        return records;

    }).catch(error => {
        console.error('Error getting documents', error);
    }); 
})