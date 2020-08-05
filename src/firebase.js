import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";




const config = {
    apiKey: "AIzaSyC0BKgQnn__XvIG-L1UCVEWhFGpdB_aJTw",
    authDomain: "chatxed.firebaseapp.com",
    databaseURL: "https://chatxed.firebaseio.com",
    projectId: "chatxed",
    storageBucket: "chatxed.appspot.com",
    messagingSenderId: "539974883861",
    appId: "1:539974883861:web:204741083f00f402c00c1c",
    measurementId: "G-7KSLVHL633"
  };
  firebase.initializeApp(config);

  export default firebase;
