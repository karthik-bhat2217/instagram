// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp=firebase.initializeApp(

{
    apiKey: "AIzaSyArRsGH7ginzYZgQGmRdbUW8ZbCZIhD--w",
    authDomain: "instagram-clone-8a364.firebaseapp.com",
    projectId: "instagram-clone-8a364",
    storageBucket: "instagram-clone-8a364.appspot.com",
    messagingSenderId: "303518978225",
    appId: "1:303518978225:web:a3ca0d9439313b7ef09290",
    measurementId: "G-K71SN7XCJF"
  });
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export {db ,auth ,storage};

  //export default firebaseConfig;