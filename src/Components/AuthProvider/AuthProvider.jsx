import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebaseinfo/firebase.info';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [spiner, setSpiner] = useState(true)
    const auth = getAuth(app)

    const registerEmailPassword = (email, password) => {
        setSpiner(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginEmailPassword = (email, password) => {
        setSpiner(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setSpiner(true)
        return signOut(auth)
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setSpiner(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
              displayName: name , photoURL: photo
            })
      }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setSpiner(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])
  

    const authInfo = {
        registerEmailPassword,
        loginEmailPassword,
        updateUser,
        logOut,
        user,
        spiner,
        googleLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;