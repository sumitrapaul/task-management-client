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
  
    useEffect(() =>{
        const unsubscribe=onAuthStateChanged(auth, (user) =>{
            setUser(user)
            setLoading(false)
        });
        return () =>{
            unsubscribe()
        }
    },[])
  
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
  