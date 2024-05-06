import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBJtxm7Ulax0qgZ84L8kKMKWJk2pSw8-28",
  authDomain: "cpit405-auth-demo.firebaseapp.com",
  projectId: "cpit405-auth-demo",
  storageBucket: "cpit405-auth-demo.appspot.com",
  messagingSenderId: "745194880809",
  appId: "1:745194880809:web:60fa89206e2e7150618138"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };