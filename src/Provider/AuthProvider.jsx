/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./../Firebase/firebase-config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const googleSignin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const githubSignin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, curruser => {
      setUser(curruser)
      setLoading(false)
      console.log("USERCHANGED")
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const signoutUser = () => {
    return signOut(auth)
  }

  const userInfo = {
    user,
    loading,
    createUser,
    googleSignin,
    githubSignin,
    signinUser,
    resetPassword,
    signoutUser
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
