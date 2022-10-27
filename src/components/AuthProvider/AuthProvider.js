import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from 'react';



const auth = getAuth();
export const AuthContext = createContext(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // email password signup 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // providers 
    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

    // signUp with google 

    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //signUp with git 

    const gitSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    // signin with email password
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // forgot password 
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // sign out 

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user observe 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();

    }, [])


    const authInfo = { user, loading, createUser, googleSignUp, gitSignUp, logIn, forgotPassword, logOut };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;