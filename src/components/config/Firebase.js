// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBOUkcvaxAJYNnIXHmI1QEX-OsSZXhtUs",
  authDomain: "todobackhand.firebaseapp.com",
  databaseURL: "https://todobackhand.firebaseio.com",
  projectId: "todobackhand",
  storageBucket: "todobackhand.appspot.com",
  messagingSenderId: "135877128350",
  appId: "1:135877128350:web:6baac5c051b46560e64b8f",
  measurementId: "G-J9XVBMHJRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

const createUser = (userData) => {
  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("New User >>>> ", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};
const logInUser = (logInData) => {
  // console.log(logInData.email)
  // console.log(logInData.password)
  signInWithEmailAndPassword(auth, logInData.email, logInData.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("User Logged In >>>> ", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export { createUser, logInUser };
