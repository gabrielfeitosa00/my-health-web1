import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

import config from "../config/firebase-creds.js";

const app = initializeApp(config);
const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

const storage = getStorage(app);



export {
  app,
  auth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  db,
  storage,
};

