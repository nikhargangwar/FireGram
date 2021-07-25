import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC_vdvx1-kWxQLMaDJaIXcQG4gCoPUtTt4",
    authDomain: "firegram-420d4.firebaseapp.com",
    projectId: "firegram-420d4",
    storageBucket: "firegram-420d4.appspot.com",
    messagingSenderId: "274860924165",
    appId: "1:274860924165:web:c1477fc2dff36be5c8eb6c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore, timestamp};