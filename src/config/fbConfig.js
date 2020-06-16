import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCczpugrquvK4VHIiaS2EhHy3p4c6xIcYg",
    authDomain: "react-app-diplomski.firebaseapp.com",
    databaseURL: "https://react-app-diplomski.firebaseio.com",
    projectId: "react-app-diplomski",
    storageBucket: "react-app-diplomski.appspot.com",
    messagingSenderId: "822282217891",
    appId: "1:822282217891:web:2e2d6de3e3a95d44"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;