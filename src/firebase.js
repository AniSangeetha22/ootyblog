// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACR_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app)


export { auth, googleProvider, db };


//  apiKey: "AIzaSyCPt0IIzl4TsrJgwXZFzFyqkUQC_c-c-Rg",
//   authDomain: "ootytour-react.firebaseapp.com",
//   projectId: "ootytour-react",
//   storageBucket: "ootytour-react.appspot.com",
//   messagingSenderId: "614447709140",
//   appId: "1:614447709140:web:935d82e34d30777aea3441",



// REACT_API_KEY= AIzaSyCPt0IIzl4TsrJgwXZFzFyqkUQC_c-c-Rg
// REACT_APP_AUTH_DOMAIN= ootytour-react.firebaseapp.com
// REACT_APP_PROJECT_ID= ootytour-react
// REACT_APP_STORAGE_BUCKET=ootytour-react.appspot.com
// REACR_APP_MESSAGING_SENDER_ID=614447709140
// REACT_APP_APP_ID=1:614447709140:web:935d82e34d30777aea3441

