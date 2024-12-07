import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMUQtXgVc2Swj9W6C03h55U6pIjtiq0Ns",
  authDomain: "xplore-dev-ef0f9.firebaseapp.com",
  projectId: "xplore-dev-ef0f9",
  storageBucket: "xplore-dev-ef0f9.appspot.com",
  messagingSenderId: "933921187227",
  appId: "1:933921187227:web:f486b2c3551904fab82d3e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
