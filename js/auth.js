import { auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "./firebase.js";

const createUser = async (email, pass) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pass);
      console.log(JSON.stringify(user));
    } catch (error) {
      alert(error.message);
    }
  };
  
  const login = async (email, pass) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      console.log(JSON.stringify(user));
      window.location.assign("/home.html");
    } catch (error) {
      alert(error.message);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
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
  
  const recoverPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.log(error.message);
    }
  };

  export {
  createUser,
  login,
  logout,
  isLoged,
  recoverPassword,
};

