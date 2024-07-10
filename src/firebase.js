// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import settings from "./utils/firebase.json";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: settings.apiKey,
	authDomain: settings.authDomain,
	projectId: settings.projectId,
	storageBucket: settings.storageBucket,
	messagingSenderId: settings.messagingSenderId,
	appId: settings.appId,
	measurementId: settings.measurementId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

// Set up Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, db, storage, googleProvider };
