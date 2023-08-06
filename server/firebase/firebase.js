// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");

const { getAuth }=require( "firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrL_1g-_3OYSZLr6ea2oa0fQeHhLvXel8",
  authDomain: "auction-8b03f.firebaseapp.com",
  projectId: "auction-8b03f",
  storageBucket: "auction-8b03f.appspot.com",
  messagingSenderId: "864381235120",
  appId: "1:864381235120:web:bfe78f21468b19ccee7075",
  measurementId: "G-6B5SZPR78N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
// const provider = auth.GoogleAuthProvider
module.exports =  {auth,app }