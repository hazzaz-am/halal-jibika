/* eslint-disable react-hooks/exhaustive-deps */
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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const googleSignin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const githubSignin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curruser) => {
      setUser(curruser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signoutUser = () => {
    return signOut(auth);
  };

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const jobData = async () => {
      const res = await fetch("http://localhost:9000/jobs");
      const data = await res.json();
      setJobs(data);
    };
    jobData();
  }, []);

  const [favourite, setFavourite] = useState([]);

  const addToFavourite = (job) => {
    const isAlreadyFavorite = favourite.some((favJob) => favJob.id === job.id);

    if (isAlreadyFavorite) {
      setFavourite((prevFavorites) =>
        prevFavorites.filter((favJob) => favJob.id !== job.id)
      );
    } else {
      setFavourite((prevFavorites) => [...prevFavorites, job]);
    }
  };

  const isJobFavorite = (id) => favourite.some((favJob) => favJob.id === id);
  useEffect(() => {
    console.log(favourite);
  }, [favourite]);


  const [apply, setApply] = useState([])

  const addToApply = (job) => {
    const isAlreadyApplied = apply.some((applyObj) => applyObj.id === job.id)

    if (isAlreadyApplied) {
      setApply((prevApplied) => prevApplied.filter((applyObj) => applyObj.id !== job.id))
    } else {
      setApply((prevApplied) => [...prevApplied, job])
    }
  }

  const isJobApplied = (id) => apply.some((applyObj) => applyObj === id)

  useEffect(() => {
    console.log(apply)
  }, [apply])

  const userInfo = {
    user,
    loading,
    createUser,
    googleSignin,
    githubSignin,
    signinUser,
    resetPassword,
    signoutUser,
    favourite,
    addToFavourite,
    isJobFavorite,
    jobs,
    addToApply,
    isJobApplied,
    apply
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
