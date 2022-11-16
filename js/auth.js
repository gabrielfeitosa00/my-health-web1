import { auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "./firebase.js";

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
    createUser,
    login,
    logout,
    isLoged,
    recoverPassword,
};

