import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbsqNukQ8V4kYh_A2qHVf7j9b_4E3zgxo",
    authDomain: "employee-manager-jatkins.firebaseapp.com",
    projectId: "employee-manager-jatkins",
    storageBucket: "employee-manager-jatkins.appspot.com",
    messagingSenderId: "73689391069",
    appId: "1:73689391069:web:44b09cb862e0e8c24e2034",
    measurementId: "G-2VBHNR04MG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp