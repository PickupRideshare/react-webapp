const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
    
    firebase.initializeApp({
      apiKey: "AIzaSyC5uDHrDlCtykHP_f1mAufKA3t3tQ9pBLo",
      authDomain: "pickup-34815.firebaseapp.com",
      databaseURL: "https://pickup-34815.firebaseio.com",
      projectId: "pickup-34815",
      storageBucket: "pickup-34815.appspot.com",
      messagingSenderId: "521002640638"
    })
    
    export var firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    export var auth = firebase.auth();

    // firestore.collection("Rides").add({
    //   test: "KKK"
    // });
