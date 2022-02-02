import * as firebase from "firebase/app"
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWz7QJnUrS5YgFUwVWzKGg8EOdL6ZPdMU",
  authDomain: "respawnordie-abe3f.firebaseapp.com",
  projectId: "respawnordie-abe3f",
  storageBucket: "respawnordie-abe3f.appspot.com",
  messagingSenderId: "1048505476331",
  appId: "1:1048505476331:web:93f423f9b15fd45b6dcaae",
  measurementId: "G-MZRWT1J3NQ"
};

firebase.initializeApp(firebaseConfig)

export default firebase