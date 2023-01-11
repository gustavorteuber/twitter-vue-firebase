import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBSGCNuBS7XttLDQ5HFjpfRU-y_PYA0xxc",
  authDomain: "twitterreact-d9207.firebaseapp.com",
  projectId: "twitterreact-d9207",
  storageBucket: "twitterreact-d9207.appspot.com",
  messagingSenderId: "1019817050119",
  appId: "1:1019817050119:web:78530f3d6aae6be6e9aaa2",
  measurementId: "G-5X67WMW2PW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);