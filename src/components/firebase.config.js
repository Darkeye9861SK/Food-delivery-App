import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyC4JnlEICJWS52769HjigU03t54z65a1yM",
  
    authDomain: "restrurantapp-6537b.firebaseapp.com",
  
    databaseURL: "https://restrurantapp-6537b-default-rtdb.firebaseio.com",
  
    projectId: "restrurantapp-6537b",
  
    storageBucket: "restrurantapp-6537b.appspot.com",
  
    messagingSenderId: "186946651236",
  
    appId: "1:186946651236:web:f6e219134f6cb3cb6f8b71"
  
  };
  
  const app = getApps > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage}