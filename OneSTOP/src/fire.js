import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA6n8q0-kd68fE4NnH635XX_cZgIcn7Dw8",
    authDomain: "procoders-6c4b5.firebaseapp.com",
    projectId: "procoders-6c4b5",
    storageBucket: "procoders-6c4b5.appspot.com",
    messagingSenderId: "776728154176",
    appId: "1:776728154176:web:61d4c68db6b4372217cfa5",
    measurementId: "G-Z3TLC6ZL2W"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
  //firebase.analytics();
