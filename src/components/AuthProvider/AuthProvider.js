import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useEffect } from 'react';



const auth = getAuth();
export const AuthContext = createContext(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // email password signup 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signUp with google 

    const googleSignUp = (googleProvider) => {
        signInWithPopup(auth, googleProvider)
    }

    //signUp with git 

    const gitSignUp = (gitProvider) => {
        signInWithPopup(auth, gitProvider)
    }

    // signin with email password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user observe 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();

    }, [])









    const authInfo = { user, loading, createUser, googleSignUp, gitSignUp, logIn };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;