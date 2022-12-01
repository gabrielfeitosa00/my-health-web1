import {
  auth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from "./firebase.js";

const createUser = async (email, pass) => {
  try {
    const parsedUser = await createUserWithEmailAndPassword(auth, email, pass);
    return parsedUser.user.uid;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

const login = async (email, pass) => {
  try {
    const parsedUser = await signInWithEmailAndPassword(auth, email, pass);

    window.localStorage.setItem("userId", parsedUser.user.uid);
    window.location.assign("/home.html");
  } catch (error) {
    alert(error.message);
  }
};
const logout = async () => {
  try {
    await signOut(auth);
    window.localStorage.removeItem("userId");
  } catch (error) {
    alert(error.message);
  }
};

const isLoged = async () => {
  try {
    auth.onAuthStateChanged(function (user) {
      console.log(user);
      if (!auth.currentUser) window.location.assign("/index.html");
    });
  } catch (error) {
    alert(error.message);
  }
};

const recoverPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    window.location.assign("/index.html");
  } catch (error) {
    console.log(error.message);
  }
};

export { createUser, login, logout, isLoged, recoverPassword };

