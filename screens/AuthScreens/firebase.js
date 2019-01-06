import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA1_qVx1JtYfCOCaIFTYZ4225ZtteZs5_8",
    authDomain: "softawie-16c54.firebaseapp.com",
    databaseURL: "https://softawie-16c54.firebaseio.com",
    projectId: "softawie-16c54",
    storageBucket: "softawie-16c54.appspot.com",
    messagingSenderId: "708385334046"
  };

firebase.initializeApp(config);

export default firebase;