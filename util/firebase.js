import admin from 'firebase-admin';
import path from 'path';
import config from '../config';
import users from '../models/users';

var serviceAcc = require(path.join(path.dirname(require.main.filename), config.firebase_priv_key_path));

admin.initializeApp({
  credential: admin.credential.cert(serviceAcc),
  databaseURL: config.firebase_db_url
});

var usersRef = admin.database().ref("Users");

usersRef.on("child_added", (snapshot, prevChildUid) => {
    let uid = snapshot.key;
    let newUser = snapshot.val();
    console.log("CREATED:\n");
    console.log(uid);
    console.log(newUser);
    users.create(uid, newUser.username);
});

usersRef.on("child_changed", (snapshot) => {
    let uid = snapshot.key;
    let alteredUser = snapshot.val();
    console.log("UPDATED:\n");
    console.log(uid);
    console.log(alteredUser);
    users.updateForUid(uid, alteredUser.firstname, alteredUser.lastname, alteredUser.description);
});

usersRef.on("child_removed", (snapshot) => {
    let uid = snapshot.key;
    let removedUser = snapshot.val();
    console.log("REMOVED:\n");
    console.log(uid);
    console.log(removedUser);
    users.removeForUid(uid);
});

const decodeIdToken = (idToken) => {
    admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
        let uid = decodedToken.uid; 
        console.log(uid);
        return uid;
    }).catch((error) => {
        console.log(error); 
    });
};

export default {
    decodeIdToken,
};

