/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import app from "../firebase/firebase.config";
import axios from "axios";
  
  export const AuthContext = createContext();
  
  const googleProvider = new GoogleAuthProvider();
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    const handleProfileUpdate = (name, image) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      });
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };

    useEffect(() => {
      const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        setUser(currentUser);
        // console.log('current user',currentUser)
        setLoading(false);
        //
        if (currentUser) {
          axios
            .post(
              "http://localhost:5000/auth",
              loggedUser,
              {
                withCredentials: true,
              }
            )
            .then((res) => {
              console.log(res.data);
            });
        } else {
          axios
            .post(
              "http://localhost:5000/logout",
              loggedUser,
              {
                withCredentials: true,
              }
            )
            .then((res) => {
              console.log(res.data);
            });
        }
      });
  
      return () => {
        return unsubsCribe();
      };
    }, [user?.email]);
  
    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      handleProfileUpdate,
      googleLogin,
    };
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  