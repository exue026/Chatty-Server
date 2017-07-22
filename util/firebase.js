import admin from 'firebase-admin';
import path from 'path';
import config from '../config';

var serviceAcc = require(path.join(path.dirname(require.main.filename), config.firebase_priv_key_path));

admin.initializeApp({
  credential: admin.credential.cert(serviceAcc),
  databaseURL: config.firebase_db_url
});

const decodeIdToken = (idToken) => {
    admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
        let uid = decodedToken.uid; 
        console.log(uid);
    }).catch((error) => {
        console.log(error); 
    });
}

export default {
    decodeIdToken,
};

