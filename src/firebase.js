import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBPs_XBtc2bPq038iFcbFjaJvjN13P6OhU",
    authDomain: "instagram-clone-66639.firebaseapp.com",
    databaseURL:
        "https://instagram-clone-66639-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "instagram-clone-66639",
    storageBucket: "instagram-clone-66639.appspot.com",
    messagingSenderId: "61516724191",
    appId: "1:61516724191:web:227659b64eced033a7366a",
    measurementId: "G-P29DZY9JZX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
