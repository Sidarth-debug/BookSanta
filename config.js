import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAjMKs7OANeR5PM96Tluj1ykOAscxemlQQ",
    authDomain: "book-santa-app-27a31.firebaseapp.com",
    projectId: "book-santa-app-27a31",
    storageBucket: "book-santa-app-27a31.appspot.com",
    messagingSenderId: "346340618248",
    appId: "1:346340618248:web:78d65f906fed7c43da61bd",
    measurementId: "G-XH6S6NXKTB",
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();