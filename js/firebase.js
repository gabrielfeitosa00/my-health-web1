import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
    createUserWithEmailAndPassword,
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

import config from "../config/firebase-creds";

const app = initializeApp(config);
const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

const storage = getStorage(app);

const createUser = async (email, pass) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, pass);
    console.log(JSON.stringify(user));
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (email, pass) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, pass);
    console.log(JSON.stringify(user));
  } catch (error) {
    console.log(error.message);
  }
};
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

const isLoged = async () => {
  try {
    auth.onAuthStateChanged(function (user) {
      console.log(user);
      if (!auth.currentUser) window.location.assign("/criar-conta.html");
    });
  } catch (error) {
    console.log(error.message);
  }
};

const recoverPassword = async () => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error.message);
  }
};

export {
    app,
    createUser,
    login,
    logout,
    isLoged,
    recoverPassword,
    db,
    storage,
};

