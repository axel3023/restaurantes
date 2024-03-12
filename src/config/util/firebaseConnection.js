import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyANzzZJgCTaxaEqpmoAJXW-fr-ZBG-3yWw",
  authDomain: "restaurantea-71848.firebaseapp.com",
  projectId: "restaurantea-71848",
  storageBucket: "restaurantea-71848.appspot.com",
  messagingSenderId: "817675414866",
  appId: "1:817675414866:web:7d799ec551a0b92bfe1e8b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth, db, storage };