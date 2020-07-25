import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hackhelper-cb7fe.firebaseio.com"
});
firebase.firestore().settings({timestampsInSpanshots:true})