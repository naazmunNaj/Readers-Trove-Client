/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);

const auth =getAuth(app);

const googleProvider = new GoogleAuthProvider();




const AuthProvider = ({children}) => {

  const [user, setUser] =useState(null);
  const [loading, setLoading] =useState(true);

const googleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log('Google Sign-In Error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

const createUser =(email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
}

const updateUser =(displayName, photoURL) =>{
    return updateProfile(auth.currentUser, {displayName,photoURL})
}

const signIn =(email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut =()=>{
    setLoading(true)
    return signOut(auth);
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log("user in current state");
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
       return unSubscribe();
    }
},[])

const authInfo ={
    user, 
    createUser,
    logOut,
    signIn,
    loading,
    googleSignIn,
    updateUser,
    setUser,
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;