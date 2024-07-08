// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import settings from "./utils/firebase.json";

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

export const auth = getAuth(app);

export const db = getFirestore(app);

// Set up Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
