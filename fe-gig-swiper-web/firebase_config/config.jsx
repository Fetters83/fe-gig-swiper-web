import { initializeApp } from "firebase/app";
import { initializeAuth, browserLocalPersistence,getAuth } from "firebase/auth";
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from "@env";


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  };



  const app = initializeApp(firebaseConfig);

  const auth = initializeAuth(app/* , {
    persistence: browserLocalPersistence
  } */
  )
  export { app, auth, getAuth }